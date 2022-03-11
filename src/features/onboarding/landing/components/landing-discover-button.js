import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const LandingDiscoverButton = () => {
    return (

        <TouchableOpacity style={styles.discoverBtn}>
            <Text style={styles.discoverBtnText}>Découvrir l'app</Text>
        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({

    discoverBtn: {
        marginBottom: 15,
        padding: 17,
        borderRadius: 15,
        width: '90%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20
    },
    discoverBtnText: {
        fontFamily: 'Inter-Medium',
        color: '#ff322e',
        fontSize: 13,
        textDecorationLine: 'underline'
    }

});

export default LandingDiscoverButton;
