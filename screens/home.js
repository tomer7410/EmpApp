import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import {styles} from './startPage'
export default class Home extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return (
       
        <View style={styles.container}>
        <Text style={styles.logo}>Home</Text>
              <TouchableOpacity onPress= {()=>this.props.navigation.navigate('UserListPage')} style={styles.loginBtn}>
                <Text style={styles.loginText}> User List</Text>
              </TouchableOpacity>
             <TouchableOpacity onPress= {()=>this.props.navigation.navigate('AddUserPage')} style={styles.loginBtn} >
                <Text style={styles.loginText}>Add User</Text>
              </TouchableOpacity>
             
        </View>
    
       
        
      );
    }
  }
  
  
  