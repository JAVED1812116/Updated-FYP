import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh} from "../../constants";
import { Col, Row, Grid } from 'react-native-easy-grid';

const In_Flat=(props)=>{
    useEffect(()=>{
        getUserDetails()

    },[]);

    // Stetes
    const[userDetails,setuserDetails]=useState({})

    // User details fetching fnc
const getUserDetails=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`userss/${id}`)
    .on("value",snapshotttt =>{
    //  console.log(id,"IDDDDD");
        // console.log(snapshotttt.val(),"Valuee");
        setuserDetails(snapshotttt.val())
    })
}
    return(
<View style={styles.MainView}>
<Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>

        <View style={{alignItems:'center'}}>
             <Image source={require('../../../assets/Logo.jpg')} style={styles.logo}/>
<Text style={styles.Heading}>javed samejo</Text>

    <Grid style={{marginTop:25}}>
    <Col style={{width:120,height:120,margin:6}}>
<TouchableOpacity>
    <Image source={require('../../../assets/agreement.jpg')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Agreement</Text>
</TouchableOpacity>
    </Col>
    <Col style={{width:120,height:120,margin:6}}>
<TouchableOpacity>
    <Image source={require('../../../assets/FlatPic.jpeg')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Flat Pics</Text>
</TouchableOpacity>
    </Col>
    </Grid>

    <Grid style={{marginTop:150}}>
    <Col style={{width:120,height:120,margin:6}}>
<TouchableOpacity onPress={()=>props.navigation.navigate("UploadBill")}>
    <Image source={require('../../../assets/uploadbills.png')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Upload Bills</Text>
</TouchableOpacity>
    </Col>
    <Col style={{width:120,height:120,margin:6}}>
<TouchableOpacity>
    <Image source={require('../../../assets/PreviousBills.png')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Previous Bills</Text>
</TouchableOpacity>
    </Col>
    </Grid>

        </View>
</View>
    )
}

const styles=StyleSheet.create({
   MainView:{
        flex:1,
        backgroundColor:'black',
    
   },
   Heading:{
        color:'#ffcc66'
   },
   logo:{
       width:120,
       height:150,
     
   },
   nametxt:{
    color:"#ffcc66",
    fontSize:25
},
});

export default In_Flat