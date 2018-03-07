import { AppRegistry } from 'react-native';
import App from './App';
import * as IOC from './src/Models/IOC';

IOC.initIOC()

AppRegistry.registerComponent('iMovie', () => App);
