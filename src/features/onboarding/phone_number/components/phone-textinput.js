import * as React from 'react';
import {Text, StyleSheet, Image, TextInput, View} from 'react-native';

const PhoneTextInput = () => {

    return (

        <View style={styles.textInputNumber}>

            <Image source={require('../../../../assets/france.png')} style={styles.textInputLocation}></Image>
            <Text style={styles.textInputBaseNumber}> +33 </Text>
            <TextInput
                style={styles.inputPhoneNumber}
                placeholder="606660666"
                keyboardType="numeric"
                maxLength={9}
            />

        </View>

    )
};

const styles = StyleSheet.create({

    textInputNumber: {
        width: '90%',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#ff322e',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInputLocation: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    textInputBaseNumber: {
        fontFamily: 'Inter-Black',
        fontSize: 18,
        marginLeft: 5
    },
    inputPhoneNumber: {
        padding: 10,
        width: '100%',
        fontFamily: 'Inter-Bold',
        fontSize: 18,
    },

});

export default PhoneTextInput;
