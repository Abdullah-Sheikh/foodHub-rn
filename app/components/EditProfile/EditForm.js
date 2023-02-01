import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function EditForm() {

    const [enteredFullName , setEnteredFullName] = useState ();
    const [enteredEmail, setEnteredEmail ] = useState();
    const [enteredPhone , setEnteredPhone] = useState();


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

  return (
    <View>
      <Text>EditForm</Text>
    </View>
  )
}