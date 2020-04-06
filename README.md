***
# __Docker__    

***  
* #### __Ensure you have the latest container images for our app:__  
``` docker
docker-compose pull
```
* #### __Bring up our dev environment by running the following command. This will start the MariaDB and Express.js containers and create the scaffolding for the Express.js app.__  
``` docker  
docker-compose up -d
```  
* #### __Tail the logs to see the dev environment initialization progress:__  

``` docker  
docker-compose logs -f
```
* #### __Install PM2 with package installer npm:__  

```
npm install -g pm2
```
The -g option tells npm to install the module globally, so that it’s available system-wide.  

    - ##### __App sample__  
    ```
    var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
      }).listen(8080, 'localhost');
      console.log('Server running at http://localhost:8080/');
    ```  
* #### __Manage Application with PM2__  
```
pm2 start index.js
```
* #### __Restart an application with this command (specify the PM2 App name or id):__  
```  
pm2 restart <app_name or id>    
```  
* #### __Stop an application with this command (specify the PM2 App name or id):__  
```
pm2 stop  <app_name or id>  
```


* #### __The PM2 process monitor can be pulled up with the monit subcommand. This displays the application status, CPU, and memory usage:__  
```
pm2 monit
```


***
