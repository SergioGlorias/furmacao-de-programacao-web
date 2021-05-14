import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

const ex = () => {
  return (
    <View style={styles.container}>
        <Text>Ler numeros até 100</Text>
        <Button title="Tudos os Números" onPress={() => numaAll()}></Button>
        <Button title="Números Impares" onPress={() => num1()}></Button>
        <StatusBar style="auto" />
    </View>
  );
}

const num1 = () => {
  let data = ""
  for (i = 0; i < 100; i++) {
    if ((i % 2) == 1) {
      data += (i + "\n") 
    }
  }
  Alert.alert("Resultado", data)
}
const numaAll = () => {
  let data = ""
  for (i = 0; i < 100; i++) {
    data += (i + "\n") 
  }
  Alert.alert("Resultado", data)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ex;