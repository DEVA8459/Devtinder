## creating server
-make app.js
-npm init- y
-npm i mongodb
-npm i mongoose
-npm i express
-hot reload 
    1. npm i -g nodemon
    2. make sure @ root level 
    3. nodemon src/app.js
    4. make changes in package.jsson in script
    ```
    "start": "node src/app,js",
    "dev": "nodemon src/app.js",
    ```
    5. npm run dev

-make the server using express
-connect the server to db
-make schema user  for db inside Model folder 
