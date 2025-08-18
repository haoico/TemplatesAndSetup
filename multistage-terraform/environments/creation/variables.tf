variable "aws-region" {
    description = "AWS-Region to deploy resources in"
    type = string
}

variable "stage" {
  description = "The deployment stage (e.g., development, staging, production)"
  type        = string
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
}

variable "public_subnet_cidrs" {
  description = "List of public subnet CIDRs"
  type        = list(string)
}

variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
}

variable "aws_profile" {
  description = "AWS CLI profile to use"
  type        = string
}

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

variable "stage" {
  description = "Deployment stage"
  type        = string
}

# RDS
variable "rds_engine" {
  description = "RDS engine type (e.g., postgres, mysql)"
  type        = string
}

variable "rds_instance_class" {
  description = "RDS instance class"
  type        = string
}

variable "rds_allocated_storage" {
  description = "Allocated storage in GB"
  type        = number
}

variable "rds_username" {
  description = "Master username for RDS"
  type        = string
}

variable "rds_password" {
  description = "Master password for RDS"
  type        = string
  sensitive   = true
}

variable "db_subnet_group_name" {
  description = "Name of the subnet group for RDS"
  type        = string
}

variable "db_security_group_ids" {
  description = "List of security group IDs for the DB"
  type        = list(string)
}

# Neptune
variable "neptune_instance_count" {
  description = "Number of Neptune instances"
  type        = number
  default     = 1
}

variable "neptune_instance_class" {
  description = "Neptune instance class"
  type        = string
}
