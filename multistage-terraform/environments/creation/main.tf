provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

module "vpc" {
    source = "../../modules/vpc"
    aws_region = "eu-central-1"
    stage               = var.stage
    vpc_cidr            = "10.0.0.0/16"
    public_subnet_cidrs = ["10.0.1.0/24", "10.0.2.0/24"]
}

module "security" {
    source = "../../modules/security"
    stage               = var.stage
    db_username         = var.db_username
    db_password         = var.db_password
    rotation_lambda_arn = var.rotation_lambda_arn
    rotation_days       = 30
}

module "lambda_go_post" {
  source                        = "../../modules/lambda"
  stage                         = var.stage
  function_name                 = "go-lambda"
  runtime                       = "go1.x"
  handler                       = "main"
  filename                      = "${path.module}/../../artifacts/go-lambda.zip"
  api_path                      = "newUser"
  api_method                    = "POST"
  api_gateway_id                = module.vpc.api_gateway_id
  api_gateway_root_resource_id  = module.vpc.api_gateway_root_resource_id
  api_gateway_arn               = "arn:aws:execute-api:${var.aws_region}:${var.aws_account_id}:${module.vpc.api_gateway_id}"
}

module "lambda_go_get" {
  source                        = "../../modules/lambda"
  stage                         = var.stage
  function_name                 = "go-lambda"
  runtime                       = "go1.x"
  handler                       = "main"
  filename                      = "${path.module}/../../artifacts/go-lambda.zip"
  api_path                      = "getUser"
  api_method                    = "GET"
  api_gateway_id                = module.vpc.api_gateway_id
  api_gateway_root_resource_id = module.vpc.api_gateway_root_resource_id
  api_gateway_arn               = "arn:aws:execute-api:${var.aws_region}:${var.aws_account_id}:${module.vpc.api_gateway_id}"
}


module "lambda_ts_post" {
  source                        = "../../modules/lambda"
  stage                         = var.stage
  function_name                 = "ts-lambda"
  runtime                       = "nodejs20.x"
  handler                       = "dist/index.handler"
  filename                      = "${path.module}/../../artifacts/ts-lambda.zip"
  api_path                      = "newUser"
  api_method                    = "POST"
  api_gateway_id                = module.vpc.api_gateway_id
  api_gateway_root_resource_id = module.vpc.api_gateway_root_resource_id
  api_gateway_arn               = "arn:aws:execute-api:${var.aws_region}:${var.aws_account_id}:${module.vpc.api_gateway_id}"
}

module "lambda_ts_get" {
  source                        = "../../modules/lambda"
  stage                         = var.stage
  function_name                 = "ts-lambda"
  runtime                       = "nodejs20.x"
  handler                       = "dist/index.handler"
  filename                      = "${path.module}/../../artifacts/ts-lambda.zip"
  api_path                      = "getUser"
  api_method                    = "GET"
  api_gateway_id                = module.vpc.api_gateway_id
  api_gateway_root_resource_id = module.vpc.api_gateway_root_resource_id
  api_gateway_arn               = "arn:aws:execute-api:${var.aws_region}:${var.aws_account_id}:${module.vpc.api_gateway_id}"
}


module "lambda_py_get" {
  source                        = "../../modules/lambda"
  stage                         = var.stage
  function_name                 = "python-lambda"
  runtime                       = "python3.12"
  handler                       = "app.handler"
  filename                      = "${path.module}/../../artifacts/python-lambda.zip"
  api_path                      = "query"
  api_method                    = "GET"
  api_gateway_id                = module.vpc.api_gateway_id
  api_gateway_root_resource_id  = module.vpc.api_gateway_root_resource_id
  api_gateway_arn               = "arn:aws:execute-api:${var.aws_region}:${var.aws_account_id}:${module.vpc.api_gateway_id}"
}


module "databases" {
    source = "../../modules/databases"
    stage                    = var.stage
    rds_engine               = "postgres"
    rds_instance_class       = "db.t3.micro"
    rds_allocated_storage    = 20
    rds_username             = var.db_username
    rds_password             = var.db_password
    db_subnet_group_name     = var.db_subnet_group_name
    db_security_group_ids    = var.db_security_group_ids
    neptune_instance_class   = "db.r5.large"
    neptune_instance_count   = 1
}

module "user-interfaces" {
    source = "../../modules/user-interfaces"
    stage        = var.stage
    project_name = "user-interface"
}