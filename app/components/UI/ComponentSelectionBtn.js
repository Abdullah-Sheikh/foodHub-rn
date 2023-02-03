import { View, Text, StyleSheet, Pressable, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../utils/colors'
import textStyles from '../../utils/textStyles';

export default function ComponentSelectionBtn({label1 , label2}) {

    const [first , setFirst] = useState(true);
    const [second , setSecond] = useState(false);

    const firstFun = () =>{

        setFirst(false);
        setSecond(true);
        
    }

    function SecondFun(){
        
    setSecond(false);
    setFirst(true);
    }

   
  return (
    <View style={styles.container}>


     { first  ?
    
     <>
        <Pressable    style={ ({pressed}) => [styles.btn ,pressed && styles.pressed]} >
            <View>
                <Text style={[textStyles.h5 , {color: "#ffffff" , textAlign:'center' , marginHorizontal:4 }]}>{label1}</Text>
    
            </View>
        </Pressable> 
    <TouchableOpacity  onPress={firstFun} style={styles.textContainer}>
    <Text style={[textStyles.h4 , styles.text]}>{label2}</Text>
    </TouchableOpacity>

    </>
      : null }


   { second ? 

   <>
    <TouchableOpacity  onPress={SecondFun} style={styles.textContainer}>
    <Text style={[textStyles.h4 , styles.text]}>{label1}</Text>
    </TouchableOpacity>

    <Pressable   style={ ({pressed}) => [styles.btn ,pressed && styles.pressed]} >
            <View>
                <Text style={[textStyles.h5 , {color: "#ffffff" , textAlign:'center' , marginHorizontal:4 }]}>{label2}</Text>
    
            </View>
        </Pressable> 
        </>

:null}
  
        

    
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        borderRadius:25,
        marginHorizontal:20,
        height:60,
        borderColor:Colors.gray20,
        borderWidth:1,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },

    btn:{
        backgroundColor:Colors.primary,
        paddingHorizontal:12, 
        height:50,
        alignItems:'center',
        margin:5,
    
        alignContent:'center',
        borderRadius:28,
        paddingVertical:13,
        elevation:4,
        shadowColor: Colors.gray80,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 8,
  flex:1
    },

    pressed:{
        opacity: 0.7,
    },
    text:{
       
        textAlign:'center',
        color:Colors.primary
        
    },
    textContainer:{
        flex:1,

    }


})