import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView,StyleSheet, Text, TouchableHighlight,ToastAndroid, View, } from "react-native";
import { accelerometer,gyroscope, setUpdateIntervalForType,SensorTypes } from "react-native-sensors";


setUpdateIntervalForType(SensorTypes.accelerometer, 300);
setUpdateIntervalForType(SensorTypes.gyroscope,300)

const Home=()=>{
  
    const nav=useNavigation()
    var x=setInterval(async()=>{showInfo()}, 1000);
    useEffect(()=>{
      x;
    })
    const [but,setBut]=useState(false);
    const [accel,setAccel]=useState({x:0,y:0,z:0,timestamp:0});
    const [gyro,setGyro]=useState({x:0,y:0,z:0,timestamp:0});
    const showInfo=()=>{
      if(gyro.y>10 || gyro.x>10 || gyro.y<-10 || gyro.x<-10 ){
        nav.navigate("Danger")
        clearInterval(x)
        
        
      }
      if (accel.y>15 || accel.x>15 || accel.y<-15 || accel.x<-15 ){
        nav.navigate("Danger")
        
        clearInterval(x)
        
      }
     
    }

    useEffect(() => {
      const subscription = gyroscope.subscribe(({ x, y, z, timestamp }) => {
        if(but){
          const corrected={
            x:Number(x.toFixed(3)),
            y:Number(y.toFixed(3)),
            z:Number(z.toFixed(3)),
          }
          setGyro({ x:corrected.x, y:corrected.y, z:corrected.z, timestamp });
          
         
        } 
      });
      
      return () => {
        subscription.unsubscribe(); 
      };
    }, [but]);

    useEffect(() => {
        const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) => {
          if(but){
            const netAcceleration = {
              x: Number(x.toFixed(3)) - 0,
              y: Number(y.toFixed(3)) - 0,
              z: Number((z - 9.81).toFixed(3)),  //gravity accel =9.81 ig :>
              x_unfix:x-0,
              y_unfix:y-0,
              z_unfix:z-9.81,
            };
            setAccel({ x:netAcceleration.x, y:netAcceleration.y, z:netAcceleration.z, timestamp });
            
          
          } 
        });
        
        return () => {
          subscription.unsubscribe(); 
        };
          
      }, [but]);


    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.chart_containeer}>
               
                </View>
           
              <TouchableHighlight style={!but?styles.button:styles.button2}onPress={()=>{setBut(!but)}}><Text style={{color:'white'}}>{!but?"Start Logging":"Stop Logging"}</Text></TouchableHighlight> 
              <View style={{flexDirection:'row'}}>


              </View>
         </View>
        </ScrollView>
            
    )
}
export default Home;

const styles=StyleSheet.create({
    container:{
        marginTop:140,
        margin:10,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    text:{
        color:'white'
    },
    button:{
        backgroundColor:'green',
        justifyContent:'center',
        borderRadius:50,
        margin:10,
        alignItems:'center',
        height:200,
        width:120,
    },
    button2:{
        backgroundColor:'grey',
        justifyContent:'center',
        borderRadius:50,
        margin:10,
        alignItems:'center',
        height:200,
        width:120,
    },
    button3:{
        backgroundColor:'black',
        justifyContent:'center',
        borderRadius:10,
        margin:10,
        alignItems:'center',
        height:40,
        width:120,
    },
    button4:{
      backgroundColor:'#666699',
      justifyContent:'center',
      borderRadius:10,
      margin:10,
      alignItems:'center',
      height:40,
      width:120,
  },
    chart_containeer:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        
    },
    chart: {
        flex: 1,
        height:500,
      }
})