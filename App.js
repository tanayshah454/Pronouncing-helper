import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button,Image,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import db from './locoldb'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      word: '',
      chunks: []
    }
  }
  componentDidMount(){
    // console.log(db.believe.chunks)
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            centerComponent={{ text: 'PRONONCIATION', style: { color: '#fff' } }}
          />
          <Image source={require("./assets/img.gif")} style={styles.image}/>
          <TextInput
          style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({
                word: text
              })
            }}
          />
          <View style={styles.goButton}>
          <Button title='show' color="#d7e419" onPress={()=>{
            this.setState({
              chunks:db[this.state.word].chunks
            })
            console.log(this.state.chunks)
          }}/>
          </View>
          <View>
            {this.state.chunks.map((item)=>{
              return(
                <TouchableOpacity style={styles.chunkButton}>
          <Text style={styles.displayText}>
          {item}
          </Text>
          </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}


const styles = StyleSheet.create({ 
  container: {
     flex: 1,
      backgroundColor: '#b8b8b8',
     },

      inputBox: { 
        marginTop: 100, 
        marginBottom:60,
        width: '40%',
         alignSelf: 'center', 
         height: 40, 
         textAlign: 'center',
          borderWidth: 4, 
          outline: 'none', },

           goButton:{ 
             backgroundColor:"#d7e419",
            width: '40%',
            marginTop:10,
             height: 55, 
             alignSelf: 'center', 
             padding: 10,
             },

              buttonText: { 
                textAlign: 'center', 
                fontSize: 30,
                 fontWeight: 'bold', 
                },

                 displayText: { 
                   textAlign: 'center', 
                   fontSize: 30, 
                  },

                  image:{
                    width: 200,
                    height:200,
                    marginTop:30,
                    marginLeft:660
                  },

                  chunkButton:{
                    backgroundColor:'#a6e5d8',
                    marginTop:20,
                    width:'40%',
                    marginLeft:462,
                    borderWidth:2
                  }
                 });