import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground,Platform } from 'react-native';

const background = require('./assets/doctor.png');

import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.imagemFundo}>
        <View style={styles.innercontainer}>
          <View style={styles.textcontainer}>
            <FontAwesome name="user" size={Platform.OS == 'ios'? "40%" : 40} color="#e6e6e6" />
            <TextInput placeholderTextColor="#e6e6e6" placeholder="Digite seu usuário" style={styles.username}></TextInput>
          </View>
          <View style={styles.textcontainer}>
            <FontAwesome5 name="unlock-alt" size={Platform.OS == 'ios'? "33%" : 30} color="#e6e6e6" />
            <TextInput secureTextEntry={true} style={styles.username}></TextInput>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  innercontainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: "center",
    alignItems: "center"
  },
  textcontainer: {
    flexDirection: "row",
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 10,
    margin: 15
  },
  username: {
    textAlign: "center",
    fontSize: 18,
    width: "85%",
    color: "white"
  }
});
