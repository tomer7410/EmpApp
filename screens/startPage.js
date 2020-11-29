import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import * as Facebook from 'expo-facebook'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import firebase from '../firebase/firebaseDb'

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state=({
      email:"",
      password:""
    })
  }
  
  loginUser=(email,password)=>{
    try {
      firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        console.log(user)
      })

      
    } catch (error) {
      console.log(error.toString())
    }
    finally{
      Alert.alert(error.toString())
    }
    
  }
  async loginWithFacebook(){
    
  try {
    await Facebook.initializeAsync({
      appId: '207688944162040',
    });
    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      this.props.navigation.navigate('Home')
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      

    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    console.log(`Facebook Login Error: ${message}`)
   
  }
  finally{
    Alert.alert(`Facebook Login Error: ${message}`)
  }
  }
  render(){
    return (
     
      <View style={styles.container}>
      <Text style={styles.logo}>EmpAPP</Text>
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
        
           
            <TouchableOpacity onPress={()=>this.loginUser(this.state.email,this.state.password)} style={styles.loginBtn}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress= {()=>this.props.navigation.navigate('SignUp')}  style={styles.loginBtn} >
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
            
            <SocialIcon onPress= {()=>this.loginWithFacebook()}
              title='Sign In With Facebook'
              button
              type='facebook'
            />
           
        
      </View>
      
     
      
    );
  }
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  }, inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  }, inputText:{
    height:60,
    color:"white"
  },forgot:{
    color:"white",
    fontSize:11
  },loginBtn:{
    width:"30%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:5
  }
});