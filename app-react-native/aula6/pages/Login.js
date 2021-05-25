import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text, View, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Login({ navigation }) {
    return (
        <ImageBackground source={require("../assets/back.jpeg")} style={styles.container}>
            <View style={styles.top}>
                <StatusBar style="inverted" />
            </View>
            <View style={styles.bottom}>
                <Text style={styles.title}>Welcome a Fashionista!</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>
                <View style={[styles.viewInput, {paddingTop: 50}]}>
                    <AntDesign name="mail" size={28} color="black" style={{alignSelf: 'center', paddingRight: 15}}/>
                    <View>
                        <Text style={styles.text}>EMAIL</Text>
                        <TextInput placeholder="exemple@exemple.com" style={styles.input}></TextInput>
                    </View>
                </View>
                <View style={[styles.viewInput, {paddingTop: 25}]}>
                    <AntDesign name="lock" size={28} color="black" style={{alignSelf: 'center', paddingRight: 15}}/>
                    <View>
                        <Text style={styles.text}>PASSWORD</Text>
                        <TextInput secureTextEntry={true} placeholder="*******" style={styles.input}></TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={{color: "white",fontWeight: "700",fontSize: 18}}>Log in</Text>
                </TouchableOpacity>
                <Text style={styles.forgotLbl}>Forgot password?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.registerBtn}>
                    <Text style={{fontWeight: "700",fontSize: 18}}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    top: {
        flex: 2
    },
    bottom: {
        flex: 3.5,
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: "100%",
        padding: 35,
        paddingTop: 45
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle: {
        color: "rgb(140, 208, 214)"
    },
    text: {
        fontWeight: "bold"
    },
    input: {
        width: "100%"
    },
    viewInput:{
        borderBottomWidth: 1,
        flexDirection: "row",
        borderColor: "rgba(155,157,170,1.0)"
    },
    loginBtn: {
        backgroundColor: "rgba(249,184,1,1.0)",
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    forgotLbl: {
        color: "rgba(155,157,170,1.0)",
        fontSize: 16,
        margin: 5,
        alignSelf: "center"
    },
    registerBtn: {
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        borderColor: "rgba(155,157,170,1.0)",
        borderWidth: 0.5
    }
});