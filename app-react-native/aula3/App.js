import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

let iNota = 1
let notas = []
export default function App() {
  const [nota, setNota] = React.useState("")
  const [info, setInfo] = React.useState(`Insira a nota nº ${iNota}`) 

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 30,
        color: 0x00ddff
      }}>Media Aritemétrica</Text>
      <TextInput style={{borderWidth: 1, width: "75%", height: "10%", textAlign: "center", margin: 10}} keyboardType="decimal-pad" value={nota} onChangeText={text => setNota(text.replace(",","."))} placeholder={info}></TextInput>
      <Button style={{margin: 10}} title="Inserir" onPress={() => {
        if (!nota) Alert.alert("Insira a Nota")
        else {
          notas.push(parseFloat(nota))
          if (iNota != 3) {
            iNota += 1
          } else {
            iNota = 1
            let maior, menorA, menorB
            if (parseFloat(notas[0])> parseFloat(notas[1])) {
              menorA = parseFloat(notas[1])
              if (parseFloat(notas[0])> parseFloat(notas[2])) {
                menorB = parseFloat(notas[2])
                maior = parseFloat(notas[0])
              } else {
                menorB = parseFloat(notas[0])
                maior = parseFloat(notas[2])
              }
            } else if (parseFloat(notas[1])> parseFloat(notas[2])) {
              menorB = parseFloat(notas[0])
              menorA = parseFloat(notas[2])
              maior = parseFloat(notas[1])
            } else {
              menorB = parseFloat(notas[0])
              menorA = parseFloat(notas[1])
              maior = parseFloat(notas[2])    
            }
            let resultado = ((maior*4)+(menorB*3)+(menorA*3))/(4+3+3)

            if (resultado >= 5) {
              Alert.alert('Aprovado', `Sua Nota foi: ${resultado}`)
            } else {
              Alert.alert('Reprovado', `Sua Nota foi: ${resultado}`)
            }
            notas = []
          }
          setNota("")
          setInfo(`Insira a nota nº ${iNota}`)
        }
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
