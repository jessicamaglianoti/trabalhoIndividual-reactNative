// LoginScreen.tsx
import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";

// CORREÇÃO: Importação do estilo que está no mesmo diretório
import { styles } from './LoginStyles'; 

// CORREÇÃO: Importação das imagens. O caminho é direto para a pasta 'assets' que está no mesmo nível.
import FundoPrincipal from './assets/Fundoprincipal.jpeg'; 
import IconeFechar from './assets/iconefechar.jpeg';

export default function Login() {
  return (
    <ImageBackground
      source={require("./assets/Fundoprincipal.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        <Text style={styles.label}>Entre ou cadastre-se</Text>

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#666"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CONTINUAR COM EMAIL</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}