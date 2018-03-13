Webpack installation:
````
mkdir webpack-demo && cd webpack-demo
npm install --save-dev webpack
npm install webpack-cli -D
````

Project dependecies:
````
npm install --save lodash
npm install --save-dev html-webpack-plugin
npm install --save-dev clean-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev file-loader
````

Run build:
````
// node.js might need to be updated to the latest version
npx webpack --config webpack.config.js
````
