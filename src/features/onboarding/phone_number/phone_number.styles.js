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
        marginTop: 25,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottomContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    byClickingText: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: 12.5,
        color: '#494967',
        marginBottom: 20,
    },
    byClickingRedText: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: 12.5,
        color: '#ff322e',
        marginBottom: 20,
        textDecorationLine: 'underline'
    },

});

export default styles;
