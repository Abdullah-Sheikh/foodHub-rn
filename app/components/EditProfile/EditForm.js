import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function EditForm({credientialsInvalid , onSubmit}) {

    const [enteredFullName , setEnteredFullName] = useState ();
    const [enteredEmail, setEnteredEmail ] = useState();
    const [enteredPhone , setEnteredPhone] = useState();


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
    <View>
     <Input 
      label="Full-Name" 
      placeholder="Your full Name"
      onUpdateValue={updateInputValueHandler.bind(this, 'fullName')}
          value={enteredFullName}
          keyboardType="text"
          isInvalid={fullNameIsInvalid}/>

<Input 
      label="E-mail" 
      placeholder="Your phone"
      onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}/>

<Input 
      label="Phone Number" 
      placeholder="Your phone"
      onUpdateValue={updateInputValueHandler.bind(this, 'phone')}
          value={enteredPhone}
          keyboardType="number"
          isInvalid={phoneIsInvalid}/>

    </View>

    
  )
}