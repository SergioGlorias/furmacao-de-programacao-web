import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

const ex = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
        <Text>Digite a sua nota</Text>
        <TextInput style={{width: 100, borderWidth: 1}}  onChangeText={text => setText(text)} defaultValue={text} />
        <Text style={{padding: 10}}>{nota(text)}</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const nota = (text) => {
  if (!text) {
    return "esperando a nota..."
  } else if (parseInt(text) >= 10){
    return "Passou"
  } else {
    return "Não Passou"  
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
export default ex;