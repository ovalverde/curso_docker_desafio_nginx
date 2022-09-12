# curso_docker_desafio_nginx

# Organization
## db_scripts
        Script for creating people table in desafiodb database.
## nginx
        nginx configuration
## node
        node application to insert into DB and list content on a GET request.
        If queryparam nome is used it inserts this param name otherwise generate a random name.
    
## docker-compose.yaml


# Example:

1. A call to http://localhost:8080/?nome=name1 will insert name1 to database.
2. A call to http://localhost:8080 will insert a Nome$RANDOM_NUMBER to the database.







  


