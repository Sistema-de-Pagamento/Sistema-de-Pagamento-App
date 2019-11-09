import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../componentes/header';
import InputText from '../componentes/inputTexto';
import Imagem from '../componentes/imagem';
import Botao from '../componentes/botao';

export default class Login extends Component {
    render(){
        return(
        <View>
            <Header></Header>
            <InputText texto = {'Email'}></InputText>
            <InputText texto = {'Senha'}></InputText>
            <Imagem></Imagem>
            <Botao texto = {'Login'}></Botao>
        </View>
    
        );
    }
}