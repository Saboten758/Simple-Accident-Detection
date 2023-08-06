import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, Linking,TouchableOpacity, View } from "react-native";
const Danger=()=>{
    
    
    const emergency=()=>{
        clearTimeout(myTimeout);
        Linking.openURL('sms:xxxx?body=Hello World')
    }
    const myTimeout = setTimeout(emergency, 5000);
    useEffect(()=>{
        myTimeout;
    })
    const nav=useNavigation()
    return(
        <View style={styles.container}>
            <Text>DID YOU MEET WITH AN ACCIDENT?</Text>
            <View style={styles.footer}>
            <TouchableOpacity onPress={emergency} style={styles.button}>
                <Text>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{clearTimeout(myTimeout);nav.navigate("Home")}} style={[styles.button,{backgroundColor:'green'}]}>
                <Text>NO</Text>
            </TouchableOpacity>
            </View>
            
        </View>

    )
}

export default Danger

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    footer:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'red',
        width:100,
        height:100,
        margin:10,
        alignItems:'center',
        justifyContent:'center'
    }
})