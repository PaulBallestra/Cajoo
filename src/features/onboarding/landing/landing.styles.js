import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

    main:{
        width: width,
        height: height,
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        marginTop: height * 0.25,
        alignSelf: 'center',
        width: width * 0.66,
        height: height * 0.18,
    },
    slogan: {
        marginTop: 25,
        color: '#494967',
        fontSize: 22,
        letterSpacing: 1.1,
        textAlign: 'center',
        fontFamily: 'EricaOne-Regular'
    },

});

export default styles;
