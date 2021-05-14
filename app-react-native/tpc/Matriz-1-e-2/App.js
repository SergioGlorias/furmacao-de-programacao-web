import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

const ex = () => {
  return (
    <View style={styles.container}>
        <Text>Ler Matriz [ [1234, 13, 15, 14 ] , [1324, 16, 18, 17 ] , [ 1452, 12, 12 , 12 ] , [1231, 12, 12, 12 ], [1212, 14, 14, 14] ]</Text>
        <Button style={{padding: 20}} title="As ler medias" onPress={() => code()}></Button>
        <Button style={{padding: 20}} title="Media da Turma" onPress={() => code1()}></Button>
        <StatusBar style="auto" />
    </View>
  );
}

const m =  [ [1234, 13, 15, 14 ] , [1324, 16, 18, 17 ] , [ 1452, 12, 12 , 12 ] , [1231, 12, 12, 12 ], [1212, 14, 14, 14] ]

const code = () => {
  let data = ""
  for (i of m) {
    data += `Aluno nº: ${i[0]}\nMédia provas: ${i[1]}\nMédia trabalhos: ${i[2]} \n\n`
  }
  Alert.alert("Resultado", data)
}
const code1 = () => {
  let data = 0
  for (i of m) {
    data += i[3]
  }
  data = data/m.length
  Alert.alert("Resultado", `A media da Turma: ${data}`)
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