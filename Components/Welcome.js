import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground,Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';



export default class Welcome extends Component {
  onPress = () => {
		this.props.navigation.navigate("SginUp");
  };
  onPress2 = () => {
		this.props.navigation.navigate("Login");
	};
  render(){  
    return (
   
      <ImageBackground
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}
        source={{uri:"https://images.pexels.com/photos/2446908/pexels-photo-2446908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}      >
    
      <Image 
        style={{
          width:300,
          height:130,
          top:-50
         
        }}
        source={require('../assets/wasfa6.png')}

      />    

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          this.props.navigation.navigate("SignUp");
        }}
        >
        <Text
        style={styles.text}>
          Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          this.props.navigation.navigate("Login");
        }}
        >

        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => {
        this.props.navigation.navigate("Home");
      }}>

      <Text style={styles.text}>Maybe later</Text>
    </TouchableOpacity>

    </ImageBackground>

    
  );
}
}
const styles=StyleSheet.create({
  button:{
    alignItems: 'center',
    backgroundColor: '#232a4f',
    padding: 10,
    width:250,
    height:40,
    marginBottom:10,
    borderRadius:100,

  },
  text:{
    fontSize:18,
    color:'white'
  }
})
