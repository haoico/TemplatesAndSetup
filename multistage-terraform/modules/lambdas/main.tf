resource "aws_iam_role" "lambda_exec" {
  name = "${var.function_name}-execution-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "sts:AssumeRole"
      Effect    = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })

  tags = {
    Environment = var.stage
  }
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "lambda" {
  function_name = "${var.stage}-${var.function_name}"
  role          = aws_iam_role.lambda_exec.arn
  handler       = var.handler
  runtime       = var.runtime
  filename      = var.filename
  source_code_hash = filebase64sha256(var.filename)

  memory_size = var.memory_size
  timeout     = var.timeout

  environment {
    variables = var.environment_variables
  }

  tags = {
    Environment = var.stage
    Name        = var.function_name
  }
}

# API Gateway Resource (optional)
resource "aws_api_gateway_resource" "api_resource" {
  count        = var.api_path != null ? 1 : 0
  rest_api_id  = var.api_gateway_id
  parent_id    = var.api_gateway_root_resource_id
  path_part    = var.api_path
}

# API Gateway Method (GET or POST)
resource "aws_api_gateway_method" "api_method" {
  count         = var.api_path != null ? 1 : 0
  rest_api_id   = var.api_gateway_id
  resource_id   = aws_api_gateway_resource.api_resource[0].id
  http_method   = var.api_method
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda_integration" {
  count                = var.api_path != null ? 1 : 0
  rest_api_id          = var.api_gateway_id
  resource_id          = aws_api_gateway_resource.api_resource[0].id
  http_method          = aws_api_gateway_method.api_method[0].http_method
  integration_http_method = "POST"
  type                 = "AWS_PROXY"
  uri                  = aws_lambda_function.lambda.invoke_arn
}

# Lambda permission for API Gateway
resource "aws_lambda_permission" "allow_api_gateway" {
  count         = var.api_path != null ? 1 : 0
  statement_id  = "AllowExecutionFromAPIGateway-${var.function_name}-${var.api_method}"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_gateway_arn}/*/*${var.api_path != "" ? "/${var.api_path}" : ""}"
}

