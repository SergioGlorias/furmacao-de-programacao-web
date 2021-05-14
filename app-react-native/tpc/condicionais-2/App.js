import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

const ex = () => {
  const [A, setTextA] = useState("");
  const [B, setTextB] = useState("");
  const [C, setTextC] = useState("");
  return (
    <View style={styles.container}>
        <Text>Insira 3 numeros</Text>
        <TextInput style={{width: 200, borderWidth: 1}}  onChangeText={text => setTextA(text)} defaultValue={A} placeholder="Escreva o Numero A"/>
        <TextInput style={{width: 200, borderWidth: 1}}  onChangeText={text => setTextB(text)} defaultValue={B} placeholder="Escreva o Numero B"/>
        <TextInput style={{width: 200, borderWidth: 1}}  onChangeText={text => setTextC(text)} defaultValue={C} placeholder="Escreva o Numero C"/>
        <Text style={{padding: 10}}>{num(A,B,C)}</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const num = (A, B, C) => {
  let maior
  if (!A || !B || !C) {
    return ""
  } else if (parseInt(A) > parseInt(B)){
    if (parseInt(A) > parseInt(C)) {
      maior = A
    } else {
      maior = C
    }
  } else if (parseInt(B) > parseInt(C)) {
    maior = B
  } else {
    maior = C
  }
  return `O maior numero é ${maior}`
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