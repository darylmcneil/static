# static
jenkins pipe-line project

#**Deploy CI/CD pipeline on AWS using JENKINS**

##**Prerequisite's**

- Software : JENKINS (Latest version) & TIDY linter
- Cloud requirements: AWS Account. IAM Username and password, EC2 keypair
- A personal GITHUB repository

##**Project Overview**

- Set up AWS
- create VM w/Unbuntu image
- Install JENKINS on VM
- Install Tidy on VM
- Install required plugins in JENKINS
- Connect GITHUB Repository w/Jenkins
- Install AWS credentials on JENKINS
- Set up s3 bucket
- Setup pipeline for AWS using JENKINS
- Add more stages to the pipeline


##**Installation/Set up work environment**

##In AWS

###- Set up new IAM user (user should not be root user)

	- Assign user to a group
	- Assign group to a policy
	- Assign policy to a role

###- Launch EC2

	- t.2 micro w/ free tier Unbuntu image
	- Install JENKINS on EC2
	- Install TIDY for use as a Linter

###-Set up s3 bucket

	- Set **PERMISSIONS** uncheck " _BLOCK ALL PUBLIC ACCESS_ "
	- Select the **PROPERTIES** tab  and "click on" _STATIC WEBSITE HOSTING_ and enable _website hosting_.
	- Select the **PERMISSIONS** tab and click on  _BUCKET POLICY_


##In JENKINS node

###- Log into JENKINS

	- Install BLUE OCEAN plugin via JENKINS interface
	- Install AWS plugin and credentials
	- Add GITHUB repository to pipeline.
	- Configure JENKINS to check repository every 2 minutes

##**Project Tasks**

Create a pipeline tha performs linting and uploading to s3 on AWS

1. Create Piepline

2. Create JENKINSFILE and add "stages"..... push JENKINSFILE to repository (dont forget to pull changes from repository to VSC)

3. Check build status in Blue Ocean
