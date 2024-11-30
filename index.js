/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/assets/components/App';
import {name as appName} from './app.json';



export {default as mainStore} from './src/store/MainStore';

AppRegistry.registerComponent(appName, () => App);
