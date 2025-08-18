# RDS Instance
resource "aws_db_instance" "rds" {
  identifier         = "${var.stage}-rds"
  engine             = var.rds_engine
  instance_class     = var.rds_instance_class
  allocated_storage  = var.rds_allocated_storage
  username           = var.rds_username
  password           = var.rds_password
  db_subnet_group_name = var.db_subnet_group_name
  vpc_security_group_ids = var.db_security_group_ids
  skip_final_snapshot = true
}

# Neptune Cluster
resource "aws_neptune_cluster" "neptune" {
  cluster_identifier = "${var.stage}-neptune-cluster"
  engine             = "neptune"
  iam_database_authentication_enabled = true

  tags = {
    Environment = var.stage
  }
}

resource "aws_neptune_cluster_instance" "neptune_instance" {
  count              = var.neptune_instance_count
  cluster_identifier = aws_neptune_cluster.neptune.id
  instance_class     = var.neptune_instance_class

  tags = {
    Name = "${var.stage}-neptune-${count.index + 1}"
  }
}
