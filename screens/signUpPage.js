import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import {styles} from './startPage'
import firebase from '../firebase/firebaseDb'
export default class SignUP extends React.Component {
    constructor(props){
      super(props)
      this.state=({
        email:"",
        password:""
      })
      
    }
    signUpUser=(email,password)=>{
        console.log("arrived")
        try {
          if(this.state.password.length<6){
            Alert.alert("Please enter at least 6 characters")
            return;
          }
          
          firebase.auth().createUserWithEmailAndPassword(email,password)
          this.props.navigation.navigate('Home')
          
        } catch (error) {
          Alert(error.toString())
        }
        
        
    
      }
    render(){
      return (
        <View style={styles.container}>
            <Text style={styles.logo}>SignUP</Text>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    placeholder="Email..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={email => this.setState({email})}/>
            </View>
            <View style={styles.inputView} >
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Password..." 
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}  
                    onChangeText={password => this.setState({password})}/>
                    
            </View>
            <TouchableOpacity onPress= {()=>this.signUpUser(this.state.email,this.state.password)} style={styles.loginBtn} >
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </View>    
      );
    }
  }
  