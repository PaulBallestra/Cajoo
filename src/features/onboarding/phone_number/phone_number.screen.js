import React from 'react';
import {
    View,
    Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView
} from 'react-native';

import styles from '../phone_number/phone_number.styles';

import PhoneContinueButton from './components/phone-continue-button';
import PhoneTextInput from './components/phone-textinput';

class PhoneNumber extends React.Component {

    openLoginPage = () => {
        this.props.navigation.navigate('login')
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

                        <PhoneContinueButton/>

                    </View>

                </View>

            </KeyboardAvoidingView>
        );
    }
}

export default PhoneNumber;
