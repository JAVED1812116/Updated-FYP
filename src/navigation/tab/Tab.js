import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../containers/app/Profile';
import MapScreen from '../../containers/app/MapScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../containers/app/home';
import AllTenant from '../../containers/app/AllTenant';
import NewRequest from '../../containers/app/NewRequest';
import Tnaent1 from '../../containers/app/Tanent1';
import Register from '../../containers/app/Register';
import Account_Details from '../../containers/app/Account_Details';
import In_Flat from '../../containers/app/In_Flat';
import UploadBill from '../../containers/app/UploadBill';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const HomeStack=()=>{
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} 
      options={{
        headerShown:false
      }}
      />

      <Stack.Screen name="AllTenant" component={AllTenant} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="NewRequest" component={NewRequest} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="Tnaent1" component={Tnaent1} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="Account_Details" component={Account_Details} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="In_Flat" component={In_Flat} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="UploadBill" component={UploadBill} 
      options={{
        headerShown:false
      }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <Tab.Navigator>
      <Tab.Screen 
        options={{tabBarIcon:()=> 
          <Ionicons
            size={30}
             name="add-circle"
             color="black"/>}}
        name="Register" component={Register}/>

        <Tab.Screen 
        options={{tabBarIcon:()=> <Entypo size={30} name="home" color="black"/>}}
         name="Home" component={HomeStack} />

        <Tab.Screen
        options={{tabBarIcon:()=> 
        <MaterialCommunityIcons
          size={30}
           name="face-profile" 
           color="black"/>}}
         name="Profile" component={Profile} />

      

      </Tab.Navigator>
  );
}
