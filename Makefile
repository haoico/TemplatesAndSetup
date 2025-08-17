Create_GIT_Project_1:
	touch ReadMe &&
	git init &&
	git add . &&
	git commit -m "initial commit" &&
	gh auth login &&
	gh repo create PROJECT_NAME --public --source=. --remote=origin --push

Create_UI:

Build_GO:

Build_TS:

Build_PT:

Deploy_Terraform: