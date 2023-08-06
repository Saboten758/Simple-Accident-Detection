import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableHighlight, View,StyleSheet } from "react-native";
const Main=()=>{
    const nav=useNavigation();
    return(
        <View style={styles.container}>
            <Text>
                Road Accident Detector
            </Text>
            <TouchableHighlight onPress={()=>{nav.navigate("Home")}} style={styles.button}><Text>PRESS ME</Text></TouchableHighlight>
        </View>
    )
}

export default Main

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
        backgroundColor:'#ff5050',
        width:100,
        height:100,
        margin:10,
        alignItems:'center',
        borderRadius:10,
        justifyContent:'center'
    }
})