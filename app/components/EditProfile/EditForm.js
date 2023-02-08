import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../UI/Input';
import PrimaryBtn from '../UI/PrimaryBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function EditForm({credientialsInvalid , onSubmit}) {

    const [enteredFullName , setEnteredFullName] = useState ();
    const [enteredEmail, setEnteredEmail ] = useState();
    const [enteredPhone , setEnteredPhone] = useState();

   

    useEffect(() => {
        const  setData = async ()=> {
            try {
                const name = await AsyncStorage.getItem('name');
                const email = await AsyncStorage.getItem('email');
                const phone = await AsyncStorage.getItem('phone');
                setEnteredFullName(name)
                setEnteredEmail(email)
                setEnteredPhone(phone)

                
              } catch (error) {
               
              }
       
        }
        setData();
    
    },[enteredFullName ,enteredEmail]  );


    const   {
        fullName: fullNameIsInvalid,
        email :emailIsInvalid,
        phone: phoneIsInvalid


    }  = credientialsInvalid;


    function updateInputValueHandler (inputType , enteredValue) {

        switch(inputType ){
            case 'fullName':
                setEnteredFullName(enteredEmail);
                break;
            case 'email':
                setEnteredEmail(enteredEmail);
                break;
            case 'phone':
                setEnteredPhone(enteredPhone);        
        }

    }

    function submitHandler () {
        onSubmit( {
            fullName: enteredFullName,
            email :enteredEmail,
            phone: enteredPhone
            
    
        })
    }
    

  return (
    <View style={styles.root}>
     <Input 
      label="Full Name" 
      placeholder="Your full Name"
      onUpdateValue={updateInputValueHandler.bind(this, 'fullName')}
          value={enteredFullName}
          keyboardType="default"
          isInvalid={fullNameIsInvalid}/>

<Input 
      label="E-mail" 
      placeholder="Your email"
      onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}/>

<Input 
      label="Phone Number" 
      placeholder="Your phone"
      onUpdateValue={updateInputValueHandler.bind(this, 'phone')}
          value={enteredPhone}
          keyboardType="number-pad"
          isInvalid={phoneIsInvalid}/>


    <PrimaryBtn onPress={submitHandler} label="Update"/>
    </View>

    
  )
}


const styles = StyleSheet.create({

    root:{
        marginVertical:25,
    }
    
})