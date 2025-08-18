variable "aws_region" {
  description = "AWS region where resources will be created"
  type        = string
}

variable "stage" {
  description = "Environment stage (e.g. dev, staging, prod)"
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
