import React from 'react';
import {
    View,
    Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView
} from 'react-native';
import { Auth } from 'aws-amplify';

import styles from '../phone_number/phone_number.styles';

//Components
import PhoneContinueButton from './components/phone-continue-button';
import PhoneTextInput from './components/phone-textinput';


class PhoneNumber extends React.Component {

    openLoginPage = () => {
        this.props.navigation.navigate('login')
    };

    createAccount = async () => {
        try {
            const { user } = await Auth.signUp({
                username: '+33649075146',
                password: 'azerty'
            });
            console.log('utilisateur créé:', user);
        } catch (error) {
            console.log('error signing up:', error);
            /*Auth.forgotPassword('+33687783534')
                    .then(data => console.log(data))
                    .catch(err => console.log(err));
            // Collect confirmation code and new password, then
            Auth.forgotPasswordSubmit(username, code, new_password)
                    .then(data => console.log(data))
                    .catch(err => console.log(err));*/
        }
        /*try {
            const response = await Auth.confirmSignUp('lucas.diams@hotmail.fr', '445765');
            console.log('response:', JSON.stringify(response))
        } catch (error) {
                console.log('error confirming sign up', error);
        }*/
        /*try {
            const { user } = await Auth.signUp({
                username: this.state.email,
                password: this.state.password,
                attributes: {
                    email: this.state.email // optional
                }
            });
            console.log('utilisateur créé:', user);
        } catch (error) {
            console.log('error signing up:', error);
        }*/
    };

    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.main}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={this.openLoginPage} style={styles.headerIcon}>
                        <Image source={require('../../../assets/left-arrow.png')}  style={styles.headerIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Connexion</Text>
                </View>

                <View style={styles.container}>

                    <PhoneTextInput/>

                    <View style={styles.bottomContent}>

                        <Text style={styles.byClickingText}>En cliquant sur "CONTINUER", vous acceptez la <Text style={styles.byClickingRedText}>Politique de Confidentialité</Text>, les <Text style={styles.byClickingRedText}>CGU</Text> et les <Text style={styles.byClickingRedText}>CGV</Text> de Cajoo </Text>

                        <PhoneContinueButton onPress={this.createAccount}/>

                    </View>

                </View>

            </KeyboardAvoidingView>
        );
    }
}

export default PhoneNumber;
