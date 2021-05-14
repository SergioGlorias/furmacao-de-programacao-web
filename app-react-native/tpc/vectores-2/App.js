import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

const ex = () => {
  return (
    <View style={styles.container}>
        <Text>Escrever ARRAY ["João","Maria","Jose","Tiago","Diogo"]</Text>
        <Button title="Escrever" onPress={() => code()}></Button>
        <StatusBar style="auto" />
    </View>
  );
}

const code = () => {
  let data = ""
  for ( i of ["João","Maria","Jose","Tiago","Diogo"]) {
    data += (i + "\n")
  }
  Alert.alert("Reseultado", data)
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