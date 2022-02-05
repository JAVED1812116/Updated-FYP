import React, * as react from 'react';
import {View,Text,Image,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react/cjs/react.development';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';


const Account_Details=()=>{
    let id = firebase.auth().currentUser.uid

    // states 
    const[IBAN,setIBANNum]=useState("")
    const[BankName,setBankName]=useState("")
    const[Cardnumber,setCardNumber]=useState("")
    const submitRecord = () => {
        firebase.database().ref(`AccountDetail/${id}`)
        .set({
            IBAN,
            BankName,
            Cardnumber,
        })
        .then(response =>{
            // console.log(response,"RESSSSSSSSSS");
            setIBANNum("")
            setBankName("")
            setCardNumber("")
            alert('saved')
        })
        .catch(eror =>{
            console.log(eror,"EERRREERRR");
        }) 
    }
         return(
            <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
            <Image source={require('../../../assets/Logo.jpg')} style={styles.logo}/>
<ScrollView>
            <Image source={require('../../../assets/Card.jpg')} style={styles.logo}/>
            <Text style={{ color: '#ffcc66', fontSize: 24, fontWeight: 'bold' }}>Account Detail</Text>
            <TextInput 
            placeholder='Enter your IBAN Number' 
            placeholderTextColor={'white'} 
            keyboardType='numeric'
            style={styles.txtField}  
            value={IBAN}
            onChangeText={(main)=>setIBANNum(main)}
            />
            <TextInput 
            placeholder='Enter your Bank Name' 
            placeholderTextColor={'white'} 
            style={styles.txtField}
            value={BankName}
            onChangeText={(main)=>setBankName(main)}
            />
            <TextInput 
            placeholder='Enter your Card Number' 
            placeholderTextColor={'white'} 
            keyboardType='numeric'
            style={styles.txtField}
            value={Cardnumber}
            onChangeText={(main)=>setCardNumber(main)}
            />
            <TouchableOpacity onPress={submitRecord} >
                <Text style={styles.btn}>Save</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
        )
    }
    const styles=StyleSheet.create({
        logo: {
            width: 120,
            height: 150
        },
        txtField:{
                borderBottomWidth:2,
                borderBottomColor:'#ffcc66',
                width:275,
                color:'white'

        },
        btn:{
            marginTop:22,
            color:'white',
            fontSize:27,
            width:215,
            borderWidth:2,
            borderRadius:15,
            textAlign:'center',
            backgroundColor:'#ffcc66'
        }
    })
export default Account_Details