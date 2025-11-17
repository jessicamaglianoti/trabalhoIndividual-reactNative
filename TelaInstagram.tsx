import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import {styles} from './InstagramStyle'

export default function SplashInstagram() {
  return (
    <View style={styles.container}>

      <Image 
        source={require("./assets/logo.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.metaArea}>
        <Text style={styles.from}>from</Text>

        <Image 
          source={require("./assets/meta.jpeg")}
          style={styles.metaLogo}
          resizeMode="contain"
        />
      </View>

    </View>
  );
}