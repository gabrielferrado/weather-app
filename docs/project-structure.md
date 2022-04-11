<img alt="weather-app" src="../src/assets/logo.png" width="512" height="512" title="logo"/>

# 🍺 Project Structure

## File structure

`index.js` is the entry-point for our file, and is mandatory.
`App.tsx` is the main-point for our application.

- `/android` - contains native code specific to the Android OS
- `/ios` - native code specific to iOS
- `/docs` - as the name suggests - any docs
- `/src` - contains our JS and style code.
  - `/screens` - contains all screens/pages
  - `/services` - app-wide services
    - `/api` - generic network handling with API constants
    - `/context` - contains context to handle global state
    - `/models` - generic models should lay here
    - `/navigation` - navigation system lay here
  - `/shared` - whole app-wide shared
    - `/components` - app-wide shared components
    - `/constants` - app-wide shared constant variables
    - `/localization` - app-wide localization
    - `/theme` - app-wide theme which contains `color palette` and `fonts`
  - `index.js` - the starting place for our app
  - `App.tsx` - the main place for our app

## Project Structure on Flat Design

```
├───android
├───ios
├───src
│   ├───screens
│   │   ├───home
│   │   │   ├───HomeScreen.style.ts
│   │   │   ├───HomeScreen.tsx
│   │   │   └───index.ts
│   │   ├───search
│   │   │   ├───SearchScreen.style.ts
│   │   │   ├───SearchScreen.tsx
│   │   │   └───index.ts
│   │   └───settings
│   │       ├───SettingsScreen.style.ts
│   │       ├───SettingsScreen.tsx
│   │       └───index.ts
│   ├───services
│   │   ├───api
│   │   │   ├───api.constant.ts
│   │   │   └───index.ts
│   │   ├───context
│   │   │   └───index.tx
│   │   ├───models
│   │   │   └───index.ts
│   │   └───navigation
│   │       └───index.tsx
│   └───shared
│       ├───components
│       │   ├───card
│       │   └───header
│       ├───constants
│       │   └───index.tsx
│       └───theme
│           ├───fonts.ts
│           └───themes.ts
│   
├───.babelrc
├───.commitlintrc.json
├───.eslintignore
├───.eslintrc.js
├───.gitattributes
├───.gitignore
├───.npmignore
├───.prettierignore
├───.prettierrc
├───.watchmanconfig
├───app.json
├───App.tsx
├───global.d.ts
├───index.d.ts
├───index.js
├───metro.config.js
├───package-lock.json
├───package.json
├───react-native.config.js
├───README.md
├───tsconfig.json
```
