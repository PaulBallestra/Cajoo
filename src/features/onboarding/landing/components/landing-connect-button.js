import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const LandingConnectButton = (props) => {

    return (
        <TouchableOpacity
            style={styles.connectBtn}
            {...props}>

            <Text style={styles.connectBtnText}>ME CONNECTER</Text>
            <Image
                source={require('../../../../assets/hello-hand.png')}
                style={styles.helloImg}></Image>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

    connectBtn: {
        marginBottom: 15,
        padding: 17,
        backgroundColor: '#ff322e',
        borderRadius: 15,
        width: '90%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 85
    },
    connectBtnText: {
        fontFamily: 'Inter-Black',
        color: 'white',
        fontSize: 17
    },
    helloImg: {
        width: 20,
        height: 20,
        marginLeft: 5
    },

});

export default LandingConnectButton;
