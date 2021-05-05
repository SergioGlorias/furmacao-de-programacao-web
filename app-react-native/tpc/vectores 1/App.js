import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

const ex = () => {
  return (
    <View style={styles.container}>
        <Text>Usar a ARRAY [1,0,5,-2,-5,7]</Text>
        <Button title="Somar ARRAY[0] + ARRAY[5] + ARRAY[1] e ARRAY[4] = 100 e depois ler tudos" onPress={() => code()}></Button>
        <StatusBar style="auto" />
    </View>
  );
}

const code = () => {
  let a = [1,0,5,-2,-5,7]
  let soma = a[0] + a[5] + a[1]
  Alert.alert("SOMA", `${a[0]} + ${a[5]} + ${a[1]} = ${soma}`)
  a[4] = 100
  let data = ""
  for (i of a) {
    data += (i + "\n")
  }
  Alert.alert("Array[4] agora é 100", `Agora o array é\n${data}`)
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