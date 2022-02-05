import React, {useEffect,useState} from 'react';
import {View, Text,StyleSheet, TouchableOpacity,Image,ScrollView,Button} from "react-native";
import firebase from 'firebase';

const AllTenant=(props)=>{
    const [data, setData] = useState({});
    useEffect(() =>{
        let id= firebase.auth().currentUser.uid;
        if (id) {
            firebase.database().ref(`PropertyRegistration/${id}`)
                .on('value', (snapshot) => {
                    if (snapshot.val()){
                     setData(snapshot.val());
                    
                    }
                });}
 
    },[]) 
    
    // console.log(Object.keys(data).lastItem)

    // useEffect(()=>{
       

    // },[]);

    return(
        <View style={styles.View1}>
        
       
        <Image source={require('../../../assets/Logo.jpg')} style={styles.logo}/>
        <Text style={styles.Heading}>My All Tenants</Text>

<TouchableOpacity onPress={()=>props.navigation.navigate("In_Flat")}>
    <Text style={styles.btn}>Flat 1 </Text>
    <Text style={{color:'white'}}>{data[0]}</Text>

</TouchableOpacity>

{/* <TouchableOpacity onPress={()=>props.navigation.navigate("In_Flat")}>
    <Text style={styles.btn}>Flat 2</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate("In_Flat")}>
    <Text style={styles.btn}>Flat 3</Text>
</TouchableOpacity> */}
       
        </View>
    )
}
const styles=StyleSheet.create({
   View1:{
       flex:1,
       backgroundColor:'black',
       alignItems:'center'
   },
   logo:{
       width:120,
       height:150,
   },
   Heading:{
       color:'#ffcc66',
       fontSize:24,
       fontWeight:'bold',
   },
   btn:{
       color:'white',
       backgroundColor:'#ffcc66',
       marginTop:22,
       width:122,
       height:42,
       textAlign:'center',
       paddingTop:5,
       fontWeight:'bold',
       fontSize:18,
       borderWidth:2,
       borderRadius:22,
       
   }

});
export default AllTenant