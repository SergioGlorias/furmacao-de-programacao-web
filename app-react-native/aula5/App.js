import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, TouchableHighlight, Linking } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Entypo name="menu" size={28} color="black" style={styles.menuIcon} />
        <Text style={styles.title}>Hello kms</Text>
        <FontAwesome name="bell" size={28} color="black" style={styles.icon, { marginLeft: "auto" }} />
        <FontAwesome name="shopping-cart" size={28} color="black" style={styles.icon} />

        <StatusBar style="auto" />
      </View>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search..." style={{ width: wp(70) }} />
        <FontAwesome name="search" size={18} color="black" style={{ paddingRight: 15, marginTop: "auto", marginBottom: "auto" }} />
      </View>
      <View style={{ flex: 18 }}>
        <TouchableHighlight onPress={() => Linking.openURL("https://youtube.com/shorts/gh7EQsSrd_o")} activeOpacity={1} underlayColor="#fff">
          <View style={styles.shadow, styles.ad}>
            <View style={{ flex: 3, backgroundColor: "#fff", justifyContent: "center", borderTopLeftRadius: 7, borderTopRightRadius: 7}}>
              <Text style={{ marginLeft: wp(5), fontWeight: "bold", fontSize: 16 }}>Today</Text>
              <Text style={{ marginLeft: wp(5), fontWeight: "bold", fontSize: 18 }}>Special</Text>
              <Text style={{ marginLeft: wp(5), fontWeight: "bold", fontSize: 25, color: "#e37302", letterSpacing: 2 }}>FOOD</Text>
            </View>
            <View style={{ flex: 0.001, position: "relative", left: wp(40), top: hp(-14) }}><Image style={styles.img} source={require("./assets/mango.png")} /></View>
            <View style={{ flex: 2, backgroundColor: "#e37302", borderBottomRightRadius: 7, borderBottomLeftRadius: 7, justifyContent: "center" }}>
              <Text style={{ backgroundColor: "#030014", color: "#fff", marginLeft: wp(6), marginRight: "auto", padding: 5 }}>Order Now</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbar: {
    flex: 2.5,
    backgroundColor: "rgba(255,196,64,1.0)",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: hp(2)
  },
  menuIcon: {
    paddingLeft: 10
  },
  title: {
    paddingLeft: wp(2),
    fontSize: 18,
    fontWeight: "600"
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("80%"),
    height: hp("7%"),
    alignSelf: "center",
    borderRadius: 25,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    backgroundColor: "white",
    zIndex: 2,
    position: "relative",
    top: Dimensions.get("window").width > 1000 ? wp("-2%") : wp("-5%")
  },
  ad: {
    flexDirection: "column",
    height: hp(30),
    width: wp(90),
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  img: {
    zIndex: 10,
    position: "relative",
    width: 150,
    height: 150,
  }

});
