import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import styles from './landing.styles'

import LandingConnectButton from './components/landing-connect-button'
import LandingDiscoverButton from './components/landing-discover-button';


class Landing extends React.Component {

    render() {
        return (
            <View style={styles.main}>

                <Image
                    source={require('../../../assets/cajoo-logo.png')}
                    style={styles.logo}></Image>

                <Text style={styles.slogan}>
                    Vos courses en 3 clics !
                </Text>

                <LandingConnectButton/>
                <LandingDiscoverButton/>

            </View>
        );
    }
}


export default Landing;
