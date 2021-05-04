import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Olá eu sou o Sérgio</Text>
        <Button title="Clica em mim!!" onPress={() => this.test()}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }
  test() {
    //apresentar mensagens
    //Alert.alert("Mensagem nova", "Eu sou um Alert")

    //msg no terminal
    //console.log("Escrevi na consola")

    //criar varialvel
    /*let number2 = 4
    let number3 = 32

    let number1 = number2 + number3

    if (number2 < number3) {
      console.log("Superior")
    } else {
      console.log("Infeiror")
    }
    console.log(number1)*/

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
