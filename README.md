Webpack installation:
````
mkdir webpack-demo && cd webpack-demo
npm install --save-dev webpack
npm install webpack-cli -D
npm install --save-dev html-webpack-plugin
npm install clean-webpack-plugin --save-dev
````

Project dependecies:
````
npm install --save lodash
````

Run build:
````
// node.js might need to be updated to the latest version
npx webpack --config webpack.config.js
````
