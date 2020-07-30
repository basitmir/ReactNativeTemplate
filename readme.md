## React Native Template (JavaScript)

#### Current Versions
- React **(16.3.1)**
- React Native **(0.63.1)**

## Steps to use 
- Clone this repo
- Navigate to ios folder and install pod  
```bash
cd ios && pod install 
```
- To link fonts to react-native, run below command
```bash
yarn react-native link
```

## Project Structure
This template follows following directory structure - 

```
|-- root
    |-- __test__
    |-- android
    |-- ios
    |-- node_modules (Not commited to git)
    |-- Source
        |-- Components
        	|-- Button
            	|--Button.js
            |-- CustomHeader
            	|-- CustomHeader.js
            |-- package.json
        |-- Helpers
        	|-- DateHelper.js
        	|-- package.json
        |-- Localization
        	|-- en
            	|-- en.json
			|-- es
            	|-- es.json
            |-- package.json
        |-- Models
        	|--
        |-- Navigators
        	|-- AppContainer.js
            |-- AppTabNavigator.js
            |-- TabStackNavigator.js
            |-- package.json
        |-- Redux
        	|-- Actions
            	|-- Action.js
            |-- Reducers
            	|-- Reducer.js
            |-- Stores
            	|-- Store.js
            |-- package.json
        |-- Resources
        	|-- Data
            	|--
            |-- Fonts
            	|--
            |-- Icons
            	|--
            |-- Images
            	|--
                |--
        |-- Screens
        	|-- Home
            	|-- Home.js
                |-- HomeStyle.js
            |-- Screen2
            	|-- 
                |--
			package.json
        |-- Services
        	|-- NetworkManager.js
            |-- Endpoints.js
            |-- package.json
        |-- Themes
        	|-- DefaultTheme.js
        	|-- package.json
    |-- .env.dev
    |-- .env.staging
    |-- .env.qa
    |-- .env.production
    |-- .eslintrc.js
    |-- app.json
    |-- babel.config.json
    |-- index.js
    |-- metro.config.js
    |-- react-native.config.js
    |-- package.json
    |-- readme.md
```