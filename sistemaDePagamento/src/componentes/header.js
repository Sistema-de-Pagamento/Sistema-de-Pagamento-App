import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';

const Header = () => {
    return(
        <View style = {styles.cabecalho}>
            <Image source = {require('../resources/bitcoin-logo.png')} style = {styles.imagem}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho:{
        height: 180,
        backgroundColor: '#FD9F92'
    },
    imagem:{
        height: 100,
        width: 100,
        alignSelf: "center",
        marginVertical: '10%'
    }
})

export default Header;