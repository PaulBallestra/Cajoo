import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from './login.styles'

import SocialConnectButton from './components/social-connect-button';

class Login extends React.Component {

    openLandingPage = () => {
        this.props.navigation.navigate('landing')
    };

    render() {
        return (
            <View style={styles.main}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={this.openLandingPage} style={styles.headerIcon}>
                        <Image source={require('../../../assets/left-arrow.png')}  style={styles.headerIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Connexion</Text>
                </View>

                <View style={styles.container}>

                    <Text style={styles.slogan}>Connectez vous simplement !</Text>

                    <SocialConnectButton type={'facebook'}/>

                    <SocialConnectButton type={'google'}/>

                    <SocialConnectButton type={'call'}/>

                </View>

            </View>
        );
    }
}

export default Login;
