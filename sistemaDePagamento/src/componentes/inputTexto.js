import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const inputTexto = (props) => {
    return(
        <View style = {styles.view}>
            <TextInput secureTextEntry = {true} style = {styles.entradaTexto} placeholder = {props.texto}>

            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    entradaTexto:{
        alignSelf: "center",
        fontSize: 20,
        width: 300,
        borderBottomWidth: 0.5,
        borderBottomColor: 'black'
    },
    view:{
        marginTop: 50,
        alignSelf: "center",
        width: 300
    }
})

export default inputTexto;