import {AppRegistry} from 'react-native';

//import App from './App';

import rootContainer from './src/navigation';
import {name as appName} from './app.json';

//Amplify Init
import Amplify from 'aws-amplify'
import awsconfig from './src/config/aws-exports'

Amplify.configure(awsconfig);

AppRegistry.registerComponent(appName, () => rootContainer);

