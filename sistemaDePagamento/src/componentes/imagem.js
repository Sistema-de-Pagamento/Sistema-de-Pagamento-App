import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Imagem = (props) => {
    return(
        <View style = {styles.view}>
            <Image source = {require('../resources/facebook-logo.png')} style = {styles.imagem}></Image>
            <Image source = {require('../resources/gmail-logo.png')} style = {styles.imagem}></Image>
        </View>
    )
    
}

const styles = StyleSheet.create({
    imagem:{
        marginHorizontal: 8,
        width: 50,
        height: 50
    },
    view:{
        flexDirection: "row",
        marginTop: 50,
        alignSelf: "center"
    }
})

export default Imagem;