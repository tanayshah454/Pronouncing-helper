import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button,Image,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import db from './locoldb'
import {Audio} from 'expo-av'

export default class Phonums extends React.Component{
    PlaySound=async(sound)=>{
        var link = 'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/'+sound+'.mp3'
        await Audio.Sound.createAsync(
            {uri:link},
            {shouldPlay:true}
        )
    }
    render(){
        return(
            <TouchableOpacity style={styles.chunkButton} onPress={()=>{
                this.PlaySound(this.props.phonums)
            }}>
            <Text style={styles.displayText}>
            {this.props.chunk}
            </Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({ 
    container: {
       flex: 1,
        backgroundColor: '#b8b8b8',
       },
       displayText: { 
        textAlign: 'center', 
        fontSize: 30, 
       },

       chunkButton:{
         backgroundColor:'#a6e5d8',
         marginTop:20,
         width:'40%',
         marginLeft:462,
         borderWidth:2
       }
      });