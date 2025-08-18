terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "environments/creation/terraform.tfstate"
    region         = "eu-central-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
    profile        = "admin-creator"
    role_arn       = "arn:aws:iam::123456789012:role/TerraformRole"
    workspace_key_prefix = "env"
  }
}
