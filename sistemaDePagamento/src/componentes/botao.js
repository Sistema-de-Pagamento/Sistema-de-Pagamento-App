import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Botao = (props) => {
    return(
        <TouchableOpacity>
            <View style = {styles.botao}>
                <Text style = {styles.texto}>{props.texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao:{
        alignItems: "center",
        borderRadius: 50,
        marginTop: 50,
        alignSelf: "center",
        height: 70,
        width: 190,
        backgroundColor: '#E86256'
    },
    texto:{
        marginTop: 8,
        fontSize: 35,
        color: 'white'
    }
})

export default Botao;