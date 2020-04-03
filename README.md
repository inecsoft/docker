***
# __Docker__    

***  
#### * __Ensure you have the latest container images for our app:__  
``` docker
docker-compose pull
```
#### * __Bring up our dev environment by running the following command. This will start the MariaDB and Express.js containers and create the scaffolding for the Express.js app.__  
``` docker  
docker-compose up -d
```  
#### * __Tail the logs to see the dev environment initialization progress:__  

``` docker  
docker-compose logs -f
```  


***
