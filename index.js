/**
 * @format
 */

import {AppRegistry} from 'react-native';

import Login from './src/pages/Login';
import Type from './src/pages/Steps/type';
import Car from './src/pages/Steps/car';
import Payment from './src/pages/Steps/payment';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Type);
