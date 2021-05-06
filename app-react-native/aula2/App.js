import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [text, setText] = useState("")
  const [text1, setText1] = useState("")
  return (
    <View style={styles.container}>
      <Text style={{color:"orange", fontSize: 50}}>Media</Text>
      <TextInput placeholder="Insira um numero" style={{
        height:50,
        borderWidth: 1,
        width: 200,
        color: "blue",
        textAlign: "center",
        margin: 5
      }} onChangeText={text => setText(text)} value={text} keyboardType="decimal-pad"></TextInput>
      <TextInput placeholder="Insira outro numero" style={{
        height:50,
        borderWidth: 2,
        width: 200,
        color: "blue",
        textAlign: "center",
        margin: 5
      }} onChangeText={text => setText1(text)} value={text1} keyboardType="decimal-pad"></TextInput>
      <Button title="Calcular" onPress={() => {
        if (!text || !text1) return Alert.alert("Falta de Dados", `Por favor insira os numeros`)
        Alert.alert("Resultado:", `${(parseFloat(text)+parseFloat(text1))/2}`) 
        setText("") 
        setText1("")
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
