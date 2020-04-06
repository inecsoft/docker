***  

# __RESTful API with Node.js, Express, and PostgreSQL__  

***

* #### __Run your database in docker__
docker run --name postgres -e POSTGRES_PASSWORD=password123 -e POSTGRES_PASSWORD=postgres -d postgres

* #### __Connect to the container_

docker exec -it postges psql -U postgres


* #### __First, we’ll create a role called me and give it a password of password. A role can function as a user or a group, so in this case, we’ll be using it as a user.__

```
CREATE ROLE me WITH LOGIN PASSWORD 'password';
```  

* #### __We want me to be able to create a database.__

```
ALTER ROLE me CREATEDB;

#list users
\du

#exit
\q

psql -U me -d postgres -W

CREATE DATABASE api;

# list dbs
\list

#connect to the new db
\c api

#Create a table
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

\t

#Create user
INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com'), ('josepedro','josepedro@yahoo.es');

#get data
SELECT * FROM users;
  
```
***

* ### __Create and initialize project__
```  bash  
mkdir node-api-postgres
cd node-api-postgres

npm init -y
```

* #### __install postgres__
npm i express pg

* #### __Create your app index.js and run it:__  
node index.js  

or

npm install pm2  
pm2 start index.js  

* ### __Create a database for the NodeJs portgresql CRUD example__
node create-table.js


***