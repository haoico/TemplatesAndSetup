resource "aws_secretsmanager_secret" "db_secret" {
  name        = "${var.stage}-db-secret"
  description = "Database credentials secret for ${var.stage} environment"

  tags = {
    Environment = var.stage
  }
}

resource "aws_secretsmanager_secret_version" "db_secret_version" {
  secret_id     = aws_secretsmanager_secret.db_secret.id
  secret_string = jsonencode({
    username = var.db_username
    password = var.db_password
  })
}

resource "aws_secretsmanager_rotation_schedule" "rotation" {
  secret_id           = aws_secretsmanager_secret.db_secret.id
  rotation_lambda_arn = var.rotation_lambda_arn
  rotation_rules {
    automatically_after_days = var.rotation_days
  }
}
