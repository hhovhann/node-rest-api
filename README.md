# node-rest-api
node-rest-api example

Getting Started
 
First we'll install express.

$ npm install --save-dev express

Then install @babel/cli, @babel/core and @babel/preset-env.

$ npm install --save-dev @babel/cli @babel/core @babel/preset-env

Then we'll create a .babelrc file for configuring babel.

$ touch .babelrc

This will host any options we might want to configure babel with.

{
  "presets": ["@babel/preset-env"]
}

Then create our server in server.js.

$ touch server.js

With recent changes to babel, you will need to transpile your ES6 before node can run it.
 
Then we'll add our start script in package.json.

"scripts": {
  "start": "npx nodemon --exec \"npx babel-node src/server.js\"",
}

Now let's start our server.

$ npm start

You should now be able to visit http://127.0.0.1:3000/hello and see ```Hello from server side !!!```.