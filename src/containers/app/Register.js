import * as React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Image,ScrollView}from "react-native"
import { useState } from 'react/cjs/react.development';
import Header from '../../components/Header';
import firebase from 'firebase';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {vw,vh} from "../../constants";
import DatePicker from 'react-native-datepicker';
// camera options
var options = {
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: 'Choose Photo from Custom Option'
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
 };
 
// sell product function
const Register = () =>{

    let id = firebase.auth().currentUser.uid

    // states 
    const[name,setName]=useState("")
    const[father,setFather]=useState("")
    const[number,setNumber]=useState("")
    const[dob,setDob]=useState("")
    const[cnic,setCnic]=useState("")
    const [image,setImage]=useState(null)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
      ]);

      const [date, setDate] = useState('09-10-2020');
    // record submission to firebase
    const submitRecord = () => {
        firebase.database().ref(`PropertyRegistration/${id}`)
        .push({
            name,
            father,
            number,
            dob,
            cnic,
            value
        })
        .then(response =>{
            // console.log(response,"RESSSSSSSSSS");
            setName("")
            setFather("")
            setNumber("")
            setDob("")
            setCnic("")
            setValue("")
           
        })
        .catch(eror =>{
            console.log(eror,"EERRREERRR");
        }) 
    }

    // image uploader function



    return(
        <View style={styles.mainviewstyle}>
            <Header 
            heading="Register Your Property"/>

<ScrollView>

<View style={styles.headingview}>
            <Text style={styles.heading}>
            Personal Details
            </Text></View>

            <View style={styles.inputtext}>
            <TextInput
            placeholder="Enter Your Name"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={name}
            onChangeText={(main)=>setName(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Enter Your Father Name"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={father}
            onChangeText={(main)=>setFather(main)}
            />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Enter Your Mobile Number"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={number}
            keyboardType='numeric'
            onChangeText={(main)=>setNumber(main)}
            />
        </View>

        <View style={[styles.inputtext,{height:70}]}>
           <Text style={{color:'#ffcc66'}}>Enter Your DOB</Text>
           <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2000"
          maxDate="01-01-2025"
        //   confirmBtnText="Confirm"
        //   cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 205,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        </View>

        <View style={styles.inputtext}>
            <TextInput
            placeholder="Enter Your Cnic"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            value={cnic}
            keyboardType='numeric'
            onChangeText={(main)=>setCnic(main)}
            />
        </View>

        <View style={styles.headingview}>
            <Text style={styles.heading}>
            Property Details
            </Text>
        </View>
      <View>
      <View style={styles.inputtext}>
            <TextInput
            placeholder="Property Address"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            
            />
        </View>
      <View style={styles.inputtext}>
            <TextInput
            placeholder="City"
            placeholderTextColor="#ffcc66"
            style={styles.textstyle}
            
            />
        </View>

    <Text style={{color:'#ffcc66'}}>Total Flats</Text>
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setValue={setValue}
      setItems={setItems}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      
    />
    <Text style={{color:'white'}}>{value}</Text></View>
    <TouchableOpacity onPress={submitRecord} 
        style={styles.button}
        >
            <Text style={styles.buttontxt}>
               Submit Record
            </Text>
        </TouchableOpacity>
</ScrollView>

        </View>
    )
}

const styles =StyleSheet.create({
    mainviewstyle:{
        flex:1,
        backgroundColor:"black"
    },
    inputtext:{
            height:40,
            borderBottomWidth:2,
            marginHorizontal:20,
            marginTop:20,
            borderBottomColor:"#ffcc66"
    },
    textstyle:{
         marginLeft:10,
         color:"#ffcc66"
},
button:{
        alignItems:"center",
        backgroundColor:"#ffcc66",
        marginHorizontal:60,
        marginVertical:10,
        borderRadius:50,
        marginTop:30,
        height:40
},
headingview:{
    alignItems:"center",
    marginTop:vh*0.02
},
heading:{
    color:"#ffcc66",
    fontSize:20,
    fontWeight:"bold"
},
buttontxt:{
    color:"black",
    fontSize:20,
    justifyContent:"center",
    textAlign:"center"
},
imagestyle:{
    marginTop:20,
    marginLeft:40,
    height:300,
    width:300,
    borderRadius:10
},

container: {
    flex: 1,
    // padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    // marginTop: 20,
    marginLeft:0,
  }

});
export default Register