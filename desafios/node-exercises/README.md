# JS project

## First steps
```sh
index.js
```
Initiate package.json firt time
```js
npm init -y
```
Install express
```sh
npm i express
```
create .gitignore:

write type: "module" in package.json 

Initiate server with watch
```sh
node --watch nombre.js
```	
nodemon: watch and restart server
```sh
npm i -D nodemon
```	
## instruction script: 
```json
"scripts": {
    "start": "node index.js",
    "watch": "node --watch index.js",
    "dev": "nodemon index.js"
  },
```
Execute script
```sh
npm start
npm run watch
npm run dev
```

