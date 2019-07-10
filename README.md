# Think docker and docker-compose!!!!

# multi_container_app
This demo application aims to demonstrate how to construct a multicontainerized application using dockercompose.

# Pre-requisite
1. Docker 
2. Node 
3. Package manager like NPM , YARN

# Application setup
1. clone application
2. Build and run application 
    docker-compose -f .\docker-compose.img.yaml up --build 
3. Stop application  
docker-compose -f .\docker-compose.img.yaml down

# Application Structure

It composed of two microservices such as web (front end) and mongodb (store data).

1. http://localhost:8080/ -- hello method 
2. http://localhost:8080/all -- retrieve data stored into mongo database.
3. http://localhost:8080/save-- save data posted.
   sample user data 
    {
      "email":"ajeerkhan7@gmail.com"
    }
    
  



