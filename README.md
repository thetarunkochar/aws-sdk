# aws-sdk

  - Name - Tarun Kochar
  - Description 
    - This is a nodejs project deals with aws sdk. 
    - Web API are made to handle simple AWS operations like with their routes : 
        - Create Ec2 instance -> "/create/<instance_name>"
        - Start instances -> "/start/instance_id"
        - Stop instances -> "/stop/instance_id"
        - Describe instances -> "/"
    
    - Tech Stack used :
      - NodeJs
      - Aws-SDk
      - AWS
      - DockerHub
      - Github
      - Ec2 instnaces
      - Postman
     
    - Key Learnings
      - Destructuring complex objects.
      - Pipelineing a project using multiple tech stacks.
      - Port 6000 is reserved by AWS.
      - Injecting credentials required for AWS Configure through environemnt variables while making conatiner from image.
      - sudo docker run --name c1 -p 80:6000 -e AWS_ACESSKEY_ID=<ID> -e AWS_SECRET_ACCESS_KEY=<secretkey> -e AWS_DEFAULT_REGION=us-east-1 <dockerhubimage name with tags>
     
     ------------------
     Dockerhub Link
     -------------------
     https://hub.docker.com/repository/docker/tarunkocharin/aws-sdk
     -------------------
     
     Github Link
     -------------------
     https://hub.docker.com/repository/docker/tarunkocharin/aws-sdk
     -------------------
     
     EC2 URL
     http://54.144.121.232/
     ---------------------------
     
     
