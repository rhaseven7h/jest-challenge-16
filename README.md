# JEST Challenge (React 16)

## Install Dependencies

Run a simple install of dependencies:

```shell
npm install
```

This project was originally created using:

* npm 8.5.1
* node v14.19.0

## Demo Backend

You can start the demo backend by installing `json-server`:

```shell
npm install -g json-server
```

Create a mock-todos.json yourself, or make a copy of the provided sample one:

```shell
cp mock-todos.json.dist mock-todos.json
```

then, run the following command, at the root directory of the project:

```shell
json-server --watch -p 3001 mock-todos.json
```

## How this project was created

React 16 is needed to use Enzyme, given Enzyme development was halted on React 16.

You'll need to clone in a separate directory, the `create-react-app` repo,
and checkout the `react-scripts@3.4.1` branch:

```shell
git clone https://github.com/facebook/create-react-app.git
cd create-react-app
git checkout react-scripts@3.4.1
```

Then, use the following command to create a similar project using React 16:

```shell
npx create-react-app \
  --scripts-version 3.4.1 \
  --template file:/path-to/create-react-app-react-16/packages/cra-template \
  put-your-project-name-here
```

## Reference Links

* https://axios-http.com/docs/res_schema
* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp
* https://es.reactjs.org/docs/forms.html
* https://jestjs.io/docs/mock-function-api
* https://jestjs.io/docs/mock-functions#mocking-modules
* https://jestjs.io/docs/tutorial-react#snapshot-testing
* https://testing-library.com/docs/
* https://testing-library.com/docs/dom-testing-library/api-events
* https://testing-library.com/docs/dom-testing-library/api-events/
* https://testing-library.com/docs/example-input-event/
* https://testing-library.com/docs/queries/bytestid
* https://testing-library.com/docs/react-testing-library/cheatsheet/
* https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library#step-1-setting-up-the-project
* https://www.w3.org/TR/html-aria/#docconformance

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your
own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
