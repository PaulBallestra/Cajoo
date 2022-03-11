import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const SocialConnectButton = (props) => {

    var socialName = null, socialLogo = null, socialButtonStyle = null, socialButtonTextStyle = null;

    switch(props.type){

        case 'facebook':
            socialName = 'Continuer avec Facebook';
            socialLogo = require('../../../../assets/facebook-logo.png');
            socialButtonStyle = styles.buttonFacebook;
            socialButtonTextStyle = styles.textButtonFacebook;
            break;

        case 'google':
            socialName = 'Continuer avec Google';
            socialLogo = require('../../../../assets/google-logo.png');
            socialButtonStyle = styles.buttonGoogle;
            socialButtonTextStyle = styles.textButtonGoogle;
            break;

        case 'call':
            socialName = 'Avec votre numéro !';
            socialLogo = require('../../../../assets/phone-call.png');
            socialButtonStyle = styles.buttonWithNumber;
            socialButtonTextStyle = styles.textButtonFacebook;
            break;
    }

    return (

        <TouchableOpacity
            style={socialButtonStyle}
            {...props}>

            <Image source={socialLogo} style={styles.buttonIcon}/>
            <Text style={socialButtonTextStyle}>{socialName}</Text>

        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({

    buttonFacebook: {
        padding: 17,
        backgroundColor: '#2078ec',
        borderRadius: 15,
        width: '90%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    buttonGoogle: {
        padding: 17,
        backgroundColor: 'white',
        borderRadius: 15,
        width: '90%',
        height: 55,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    buttonWithNumber: {
        padding: 17,
        backgroundColor: '#ff322e',
        borderRadius: 15,
        width: '90%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    buttonIcon: {
        width: 23,
        height: 23,
        marginRight: 7
    },
    textButtonFacebook: {
        color: 'white',
        fontFamily: 'Inter-Bold',
        fontSize: 15
    },
    textButtonGoogle: {
        color: 'black',
        fontFamily: 'Inter-Bold',
        fontSize: 15
    }

});

export default SocialConnectButton;
