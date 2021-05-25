import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather, FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Feather name="menu" size={28} color="white" style={{ paddingLeft: 15, marginRight: "auto" }} />
        <FontAwesome name="user" size={24} color="white" style={{ paddingRight: 15, marginLeft: "auto" }} />
        <StatusBar style="light" />
      </View>
      <View style={{ flex: 22 }}>
        <Image source={require("./assets/city.png")} style={{ width: wp(100) }} />
        <View style={styles.text}>
          <Text style={{color: "rgba(79,150,148,1.0)", fontSize: 40}}>Welcome !</Text>
          <Text style={{textAlign: "center", fontSize: 14}}>Sed porta magna vitae nisl lacinia orbi marlesuada sollic itudin tortor</Text>
        </View>
        <View style={styles.ViewIcons}>
          <View style={{flexDirection: "column", alignItems: "center", margin: 15}}>
            <View style={[styles.icons, {backgroundColor:"rgba(79,150,148,1.0)"}]}>
              <Entypo name="suitcase" size={24} color="white" />
            </View>
            <Text style={{color: "rgba(128,37,133,1.0)", fontSize: 16}}>Buying</Text>
          </View>
          <View style={{flexDirection: "column", alignItems: "center", margin: 15}}>
            <View style={[styles.icons, {backgroundColor:"rgba(128,37,133,1.0)"}]}>
              <Ionicons name="stats-chart" size={24} color="white" />
            </View>
            <Text style={{color: "rgba(79,150,148,1.0)", fontSize: 16}}>Selling</Text>
          </View>
          <View style={{flexDirection: "column", alignItems: "center", margin: 15}}>
            <View style={[styles.icons, {backgroundColor:"rgba(128,37,133,1.0)"}]}>
              <Entypo name="home" size={24} color="white" />
            </View>
            <Text style={{color: "rgba(79,150,148,1.0)", fontSize: 16}}>Rental</Text>
          </View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 2,
    backgroundColor: "rgba(128,37,133,1.0)",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: hp(2)
  },
  text: {
    alignItems: "center",
    margin: 10,
  }, 
  ViewIcons:{
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "center",
  }, 
  icons:{
    width: 55,
    height: 55,
    borderRadius: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
});
