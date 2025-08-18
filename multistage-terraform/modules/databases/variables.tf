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
