JavaScript Stuff DB
---

To use this data in your own project, `npm install --save javascriptstuff-db` and then try some of the following code:


```javascript
// get all the projects in a particular category
const starters = require('javascriptstuff-db/react-starter-projects');

// get tags in a particular topic
const tags = starters.tags;

// find react starter projects that use Webpack
const webpackStarters = starters.filter(x => x.tags.includes('webpack'))

// also provided as JSON data if you want
const starterJson = require('javascriptstuff-db/react-starter-projects.json');
```



Project Objects
---

Projects are in this format:

```json
{
  "githubUrl": "https://github.com/ahfarmer/minimal-react-starter",
  "githubPath": "ahfarmer/minimal-react-starter",
  "githubUserName": "ahfarmer",
  "githubRepoName": "minimal-react-starter",
  "starCount": 60,
  "description": "As minimal a react starter as you can get... while also using ES6/Babel and Webpack.",
  "homepage": "https://github.com/ahfarmer/minimal-react-starter",
  "updatedAt": "2016-10-26T04:04:54Z",
  "createdAt": "2015-10-31T17:18:26Z",
  "pushedAt": "2016-09-01T15:20:31Z",
  "dependencies": [
    "babel-core",
    "babel-loader",
    "babel-preset-es2015",
    "babel-preset-react",
    "express",
    "react",
    "react-dom",
    "webpack",
    "webpack-dev-middleware"
  ],
  "dependencyCount": 9,
  "tags": [
    "babel",
    "es6",
    "minimal",
    "webpack"
  ],
  "tagAlternateNames": [
    "es2015",
    "es2016",
    "es6+",
    "es7",
    "esnext",
    "simple",
    "transpiled"
  ]
},
```



Tag Objects
---

Tags are either plain strings, or objects in this format:

```json
{
  "name": "webpack",
  "description": "This project uses Webpack as its bundler."
}
```
