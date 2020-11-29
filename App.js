import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomePage from './screens/home'
import StartPage from './screens/startPage'
import SignUpPage from './screens/signUpPage'
import UserListPage from './screens/UserScreen'
import AddUserPage from './screens/AddUserScreen'
import EditUserPage from './screens/UserDetailScreen'
const HomeStack=createStackNavigator()
const HomeDrawer=createDrawerNavigator()
export default class App extends React.Component {
  constructor(props){
    super(props)

    
  }
  
    
  
      
  render(){
    return (
     <NavigationContainer>
       <HomeStack.Navigator>
          <HomeStack.Screen  name="startPage" component={StartPage} />
          <HomeStack.Screen  name="SignUp" component={SignUpPage} />
          <HomeStack.Screen  name="Home" component={HomePage} />
          <HomeStack.Screen  name="UserListPage" component={UserListPage} />
          <HomeStack.Screen  name="AddUserPage" component={AddUserPage} />
          <HomeStack.Screen  name="EditUserPage" component={EditUserPage} />
       </HomeStack.Navigator>
     </NavigationContainer>
    );
  }
}


