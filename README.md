Tool List
---

A database of JavaScript tools, with some metadata. For now, contains only starter projects (boilerplates / starter kits).



Purpose
---

I've used this data to build a [starter project list](http://andrewhfarmer.com/starter-project/). As an npm package, the data can be used by others to make similar apps, lists, or documentation.



Usage
---

```javascript
const toolList = require('tool-list');

// all tags
const allTags = toolList.starterProjectTags;

// starter projects that use Webpack
const webpackStarters = toolList.startersWithTag('webpack');

// raw JSON data
const starterJson = require('tool-list/data/starter-projects.json');
```



Example Project
---

Returned starter projects are in this format:

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



Contributing
---

To add your starter project, submit a pull request with your starter project GitHub URL added to the [starterProjectUrls](generator/starterProjectUrls.js) file.

Please keep the URLs in alphabetical order - that makes it easy to spot duplicates.
