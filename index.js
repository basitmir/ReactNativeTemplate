/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from '@navigators/AppContainer';


AppRegistry.registerComponent(appName, () => AppContainer);
