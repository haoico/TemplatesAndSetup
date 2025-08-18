Create_GIT_Project_1:
	touch ReadMe &&
	git init &&
	git add . &&
	git commit -m "initial commit" &&
	gh auth login &&
	gh repo create PROJECT_NAME --public --source=. --remote=origin --push

Start_UI:
	cd modern-nuxt-starter && npm run build && npm run dev

Setup_GO:
	go mod init PROJECT_NAME &&
	touch main.go

Build_GO:
	GOOS=linux GOARCH=amd64 go build -o bootstrap main.go

Setup_TS:
	npm init -y &&
	npm install aws-sdk &&
	npm install --save-dev @types/aws-lambda &&
	npm install --save-dev typescript &&
	npm install --save-dev ts-node &&

Build_TS:
	npm i &&
	npm run build

Setup_PT:
	ls -l /opt/homebrew/opt/python@3.11/bin 66
	mkdir lambda_build /opt/homebrew/opt/python@3.11/bin/pip3.11 install \
    langchain langchain-aws openai \
    --target lambda_build

Build_PT:
	cp main.py lambda_build/ &&
	cd lambda_build &&
	zip -r ../lambda_function.zip .

Deploy_Terraform:
	@if [ -z "$$STAGE" ]; then \
		echo "Usage: STAGE=creation|staging|production make deploy"; \
		exit 1; \
	fi
	terraform init -backend-config="key=${STAGE}/terraform.tfstate"
	terraform apply -var-file="environments/${STAGE}/terraform.tfvars" -auto-approve

//Example: STAGE=creation make Deploy_Terraform