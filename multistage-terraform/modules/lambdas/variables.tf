variable "aws_region" {
    description = "Region to deploy resources in"
    type = string
}

variable "stage" {
  description = "Environment stage (e.g. dev, staging, prod)"
  type        = string
}

variable "function_name" {
  description = "Name of the Lambda function"
  type        = string
}

variable "runtime" {
  description = "Runtime for the Lambda function (e.g. go1.x, nodejs20.x, python3.12)"
  type        = string
}

variable "handler" {
  description = "Handler name (e.g. main, index.handler)"
  type        = string
}

variable "filename" {
  description = "Path to the zipped deployment package"
  type        = string
}

variable "memory_size" {
  description = "Lambda memory size in MB"
  type        = number
  default     = 128
}

variable "timeout" {
  description = "Lambda execution timeout in seconds"
  type        = number
  default     = 5
}

variable "environment_variables" {
  description = "Environment variables for the Lambda function"
  type        = map(string)
  default     = {}
}

variable "api_gateway_id" {
  type        = string
  description = "API Gateway ID"
  default     = null
}

variable "api_gateway_root_resource_id" {
  type        = string
  description = "API Gateway root resource ID"
  default     = null
}

variable "api_gateway_arn" {
  type        = string
  description = "Full ARN of the API Gateway"
  default     = null
}

variable "api_path" {
  type        = string
  description = "Path part for API resource (e.g., newUser, getUser, query)"
  default     = null
}

variable "api_method" {
  type        = string
  description = "HTTP method for API Gateway resource (GET or POST)"
  default     = null
}
