import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

    main: {
        width: width,
        height: height,
    },
    header: {
        backgroundColor: '#ff322e',
        height: 66,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerText: {
        color: 'white',
        fontFamily: 'EricaOne-Regular',
        fontSize: 20,
        letterSpacing: 1.1,
        width:'65%'
    },
    headerIcon: {
        width: 20,
        height: 20,
        left: 10,
    },
    container: {
        flex: 1,
        marginTop: height * 0.22,
        alignItems: 'center',
    },
    slogan: {
        textAlign: 'center',
        fontFamily: 'EricaOne-Regular',
        fontSize: 20,
        color: '#494967',
        marginBottom: 20,
    },

});

export default styles;
