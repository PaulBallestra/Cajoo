import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const PhoneContinueButton = () => {

    return (

        <TouchableOpacity disabled={true} style={styles.continueButton}>
            <Text style={styles.continueBtnText}>CONTINUER</Text>
        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({

    continueButton: {
        padding: 17,
        backgroundColor: '#ff322e',
        borderRadius: 15,
        width: '90%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    continueBtnText: {
        fontFamily: 'Inter-Black',
        color: 'white',
        fontSize: 17,
    }

});

export default PhoneContinueButton;
