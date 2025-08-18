variable "stage" {
  description = "Deployment stage"
  type        = string
}

variable "db_username" {
  description = "Username for the DB secret"
  type        = string
}

variable "db_password" {
  description = "Password for the DB secret"
  type        = string
  sensitive   = true
}

variable "rotation_lambda_arn" {
  description = "ARN of the Lambda function that handles secret rotation"
  type        = string
}

variable "rotation_days" {
  description = "Number of days between rotations"
  type        = number
  default     = 30
}
