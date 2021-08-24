# How To Create a React App Using CRA

### *This is a 100% valid Markdown file.*

## Requirements

1. NodeJS
   - node version >= 8.10
   - npm version >= 5.6 

## Content

- [Requirements](#requirements)
- [Content](#content)
- [Steps](#steps)
    - [Default Installation](#default-installation)
    - [Install with Redux](#install-with-redux)
- [Additional Configuration](#additional-configuration)
  - [Add ESLint](#add-eslint)
  - [Install a Front-End Framework - Material UI](#install-a-front-end-framework---material-ui)
  - [Configure Routing](#configure-routing)
  - [Configure Redux](#configure-redux)
  - [Configure Firebase](#configure-firebase)
- [References](#references)

---

# Steps

> **INFO:** The following steps installs basic CRA without redux. If you want redux (redux toolkit) installed by default, see the **Install with Redux** section.

### Default Installation

1. Run the command any of the commands. The following will use the **yarn** package manager if available. If you want to use **npm**, proceed to (b):
   > **NOTE:** It is highly recommended to use **npm** (b) over yarn to have a smooth custom eslint integration.
   - ~~~js
     /* --- NPX --- */
     npx create-react-app <YOUR_PROJECT_DIRECTORY>
     /* --- NPM --- */
     npm init react-app my-app
     /* --- YARN --- */
     yarn create react-app my-app
     ~~~
   - ~~~js
     npm create-react-app my-app --use-npm
     ~~~
2. Start the development:
   - `npm start` (node)
   - `yarn start` (yarn)
3. Build for production:  
   - `npm run build` (node)
   - `yarn build` (yarn)
4. Add new modules:
   - `npm i --save <MODULE_NAME>` (node)
   - `yarn add <MODULE_NAME>` (yarn)

### Install with Redux

1. Similar to the **Default Installation** steps #1 and #2, but install using the command:  
   ~~~js
   npx create-react-app my-app --template redux --use-npm
   ~~~

---

# Additional Configuration

Further configure the default CRA app into your development environment. 

> **INFO:** The following steps uses **npm** as package manager for CRA. Steps for **yarn** may vary.

## Add ESLint

1. Install the **standard eslint dependencies** for react.
   - Using **npm**
`npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-config-standard-react eslint-plugin-react`
   - Using **yarn**
`yarn add -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-config-standard-react eslint-plugin-react`
1. Add **node_modules** in the **.gitignore** file.
`node_modules/`
3. Create npm scripts for linting and fixing.
   ~~~json
   "lint:fix": "eslint --fix <dir1> <dir2>",
   "lint": "eslint <dir1> <dir2>",
   /** eslint fix all js files */
   "lint:fix": "eslint . --fix
   ~~~
   > **NOTE:** As of 20210414, add the ff. if you will encounter an error that refers to @typescript-eslint/parser, update the npm scripts: `eslint --ignore-path .gitignore --fix .`
1. Create a **.eslintignore** file inside the `<my-app>/src/ directory` and write here files or directories that you'd like to exclude from eslint. This is similar to **.gitignore**.
2. Create a **.eslintrc.js** file inside the `<my-app>/src/` directory:
   ~~~json
   module.exports = {
       env: {
          browser: true,
          es6: true
        },
        extends: [
          'standard',
          'standard-react'
        ],
        globals: {
          Atomics: 'readonly',
          SharedArrayBuffer: 'readonly'
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2018,
          sourceType: 'module'
        },
        plugins: [
          'react', 'react-hooks'
        ],
        rules: {
          indent: ['error', 2],
          'linebreak-style': ['error', 'unix'],
          quotes: ['error', 'single'],
          semi: ['error', 'never']
          // 'no-unused-vars': 'off',
          // 'no-undef': 'off',
          // 'no-console': 2
     }
   }
   ~~~
   Import React from 'react' is no longer required if you are using **React 17** or higher. Add the following in the eslintrc.js file:  
   ~~~json
   "rules": {
       ...
       'react/jsx-uses-react': 'off',
       'react/react-in-jsx-scope': 'off'
    }
    ~~~
1. Run eslint fix.  
`npm run lint:fix`
7. Depending on your initial project set-up, you may need to:
   - update all files to Unix LF endings
   - update spacings
8. Disable a lint rule inline via the codes i.e.,  
   ~~~js
   /* eslint-disable no-unused-vars */
   const ws = new WebsocketServer(server)
   ~~~
9. Run linting  
`npm run lint`

## Install a Front-End Framework - Material UI

1. [Install](https://material-ui.com/getting-started/installation/) material-ui.
   - with **npm:** `npm install @material-ui/core`
   - with **yarn:** `yarn add @material-ui/core`
2. Use **Roboto** font from CDN, Copy the following into **/public/index.html**
`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`
3. (Optional) Install material-ui's pre-built SVG icons.
   - with **npm:** `npm install @material-ui/icons`
   - with **yarn:** `yarn add @material-ui/icons`
4. Configure CRA to use material-ui themes. Create a [simple **theme**](https://material-ui.com/customization/theming/) file (theme.js)
     ~~~js
     import { createTheme } from '@material-ui/core/styles'
     const mainTheme = createTheme({
        palette: {
          primary: {
            light: '#EDF1FA',
            main: '#31376D',
            dark: '#31376D',
            contrastText: '#FFFFFF'
          },
          secondary: {
            light: '#999999',
            main: '#009688',
            dark: '#009688',
            contrastText: '#FFFFFF'
          },
          text: {
            secondary: '#999999'
          },
          background: {
            appBar: 'rgba(248, 249, 253, 0.35)'
          }
        }
     })
     export default mainTheme
     ~~~
1. Use the theme from #4 and other material-ui globals on **index.js**
   ~~~js
   import { ThemeProvider } from '@material-ui/core/styles'
   import CssBaseline from '@material-ui/core/CssBaseline'
   import mainTheme from './theme'
   ReactDOM.render(
     <React.StrictMode>
       <ThemeProvider theme={mainTheme}>
         <CssBaseline />
         <App />
       </ThemeProvider>
     </React.StrictMode>,
     document.getElementById('root')
   )
   ~~~
2. Use material-ui on components.
    ~~~js
    import React from 'react'
    import Typography from '@material-ui/core/Typography'
    function HomePage () {
      return (
        <Typography variant='h5'>Home</Typography>
      )
    }
    export default HomePage
    ~~~


## Configure Routing

1. Install `react-router-dom` if it is not yet installed.  
`npm install --save react-router-dom`
2. Create your react components.
3. Create a **routes.js** file which references the components. For example:
    ~~~js
    import EmailContainer from './containers/email'
    import HomePage from './components/homepage'
    const routes = [
      {
        path: '/email',
        isProtected: false,
        component: EmailContainer
      },
      {
        path: '/',
        isProtected: false,
        component: HomePage
      }
    ]
    export default routes
    ~~~
4. Update **App.js** to use react-router-dom's **Router**, **Route** and **Switch** components.
    ~~~js
    import React from 'react'
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
    import Navigation from './components/navigation'
    import routes from './routes'
    function App (props) {
      return (
        <Router>
          <Navigation />
          <Switch>
			{routes.map((entry, index) => (<Route exact path={entry.path} key={index} render={(props) =>
			  <entry.component {...props} title='Props through render' />} />))}
          </Switch>
        </Router>
      )
    }
    export default App
    ~~~

## Configure Redux

1. If you installed CRA without redux, add redux (toolkit) to the existing CRA app.
   - run: `npm install --save @reduxjs/toolkit react-redux`
2. Configure a redux state slice file, i.e., **profile-slice.js** for users **profile**.
    ~~~js
    import { createSlice } from '@reduxjs/toolkit'
    const profileSlice = createSlice({
      name: 'profile',
      initialState: {
        loading: false,
        client_id: '',
        authState: '',
        lname: '',
        message: '',
      },
      reducers: {
        setLoading (state, action) {
          return { ...state, loading: action.payload, error: '' }
        },
        setError (state, action) {
          return { ...state, isLoading: false, error: action.payload }
        },
        setMessage (state, action) {
          state.message = action.payload
        },
        setAuthState (state, action) {
          state.authState= action.payload
        },
        ...
      }
    })
    export const { setLoading, setError, setMessage, setAuthState } = profileSlice.actions
    export default profileSlice.reducer
    export const setProfileError = (errorMsg) => dispatch => {
      dispatch(setError(errorMsg))
    }
    export const getLiveMessage = () => async dispatch => {
      let msg
      try {
        dispatch(setLoading(true))
        msg= await getOnlineEmail()
      } catch (err) {
        dispatch(setError(err.message))
      }
      dispatch(setMessage(msg))
    }
    ~~~
3. Create a `rootReducers.js` file in **/src/redux**. Add **profile-slice.js** and other slices in the combineReducers part here.
    ~~~js
    import { combineReducers } from 'redux'
    import profileReducer from '../containers/profile/profile-slice'
    const appReducer = combineReducers({
      user: mainPageReducer
    })
    const rootReducer = (state, action) => {
      if (state && state.user.authState === AUTH_STATE.SIGN_OUT) {
        // reset all reducers to their initial states.
        //Sign-out state detection may vary
        state = undefined
      }
      return appReducer(state, action)
    }
    export default rootReducer
    ~~~
4. Create a `store.js` file in **/src/redux**. Add slice reducers here.
    ~~~js
    import rootReducer from './rootReducer'
    import { configureStore } from '@reduxjs/toolkit'
    export const store = configureStore({
        reducer: rootReducer
    })
    ~~~
5. Update **index.js** to use redux.
    ~~~js
    // Redux
    import * as serviceWorker from './serviceWorker'
    import { Provider } from 'react-redux'
    import { store } from './redux/store'
    ReactDOM.render(
      <Provider store={store}>
        <ThemeProvider theme={outerTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>,
    document.getElementById('root'))
    ~~~
6. Use redux states in your container components.
    ~~~js
    import React, { useEffect, useState } from 'react'
    import { useDispatch, useSelector } from 'react-redux'
    import { getLiveMessage, setMessage } from './profile-slice'
    function ProfileContainer () {
      const profile = useSelector((state) => state.profile)
      const dispatch = useDispatch()
      console.log(profile)
      useEffect(() => {
        dispatch(setMessage('hello, world!'))
      }, [])
    }
    ~~~


## Configure Firebase

We are going to use the [react-redux-firebase](https://react-redux-firebase.com/) library to manage firebase. You can refer to the [sample project](https://github.com/weaponsforge/firestore-todo) for more information, or check out installation information from the tutorial [getting started with react-redux-firebase](https://blog.logrocket.com/getting-started-react-redux-firebase/).

1. Install the following dependencies. Skip installation of dependencies which are already installed in your project.
    ~~~js
    npm install --save react-redux-firebase firebase
    npm install --save redux react-redux
    npm install --save redux-firestore@latest
    npm install react-router-dom
    ~~~

---

## References

### react

[[1]](https://create-react-app.dev/docs/getting-started/) - cra getting started  
[[2]](https://reactrouter.com/web/guides/quick-start) - react router link  

### material-ui

[[1]](https://material-ui.com/customization/theming/) - theming


### redux

[[1]](https://redux-toolkit.js.org/introduction/getting-started) - redux toolkit  
[[2]](https://redux-toolkit.js.org/tutorials/quick-start) - redux getting started
