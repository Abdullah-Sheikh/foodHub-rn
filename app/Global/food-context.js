import React, { useEffect, useReducer, useState } from "react";
import createPersistedState from 'use-persisted-state';
import AsyncStorage from "@react-native-async-storage/async-storage"; 

  // dummy data
  const foodData = [
    {key:'1', name:'Salmon Salad' , detail:'Baked salmon fish' , rating:'4.8' , image:require('../assets/images/SalmonSalad.png'),category: 'mexican',  price:'5.60'},
    {key:'2' ,name:'Choco Donut' , detail:'Belgium chocolate' , rating:'4.9' , image:require('../assets/images/belgiumDonut.jpg'),category: 'donut',price:'1.20'},
    {key:'3' ,name:'Malt Donut' , detail:'Carmel Donut' , rating:'4.9' , image:require('../assets/images/caramelDonut.jpg'),category: 'donut', price:'2.10'},
    {key:'4' ,name:'Chicken Hawaiian' , detail:'Chicken, Cheese' , rating:'4.9' , image:require('../assets/images/pizzaImg1.png'),category: 'mexican', price:'11.30'},

  ];


const FoodContext = React.createContext({
    foodState: [],
    updateFood: (key, { wishlist }) => {},
  });

  function foodReducer(state, action) {
    switch (action.type) {
     
      case 'UPDATE':
        const updatableFoodIndex = state.findIndex(
          (food) => food.key === action.payload.key
        );
        const updatableFood = state[updatableFoodIndex];
        const updatedItem = { ...updatableFood, ...action.payload.data };
        const updatedFoods = [...state];
        updatedFoods[updatableFoodIndex] = updatedItem;
        //console.log("Update call : "+ updatedRestaurants[0].wishlist +  updatedRestaurants[0].name) 

        return updatedRestaurants;
      
      default:
        return state;
    }
  }

const FoodContextProvider = ({children}) => {


    const [updation , setUpdation] = useState('');
    const [foods , dispatch] = useReducer( foodReducer, foodData );


    useEffect(() => {
      const fun =  async  () => {
        
        try {

         
        const arr = await AsyncStorage.getItem('foodWishList');

        if(!arr)
        {
          AsyncStorage.setItem('foodWishList' , '0')
        }

        if(arr)
        {
        
       for (var i in restaurants) 
       for( var j in arr){
          if (foods[i].key == arr[j]) {
           
            const wishlist  = true
            updateFood (arr[j],{wishlist} )
           
             break; //Stop this loop, we found it!
          }
        }
      }

    } catch (error) {
          
    }
        
        
       
      }
      fun();
    },[updation] )


    const push = async (key) => {

      try {
        
      const arr = await AsyncStorage.getItem('foodWishList');
      const check = arr.includes(key);
      if(check)
      {
        return
      }
      
      const result = arr.concat(key) // concatenate key with previous keys
      AsyncStorage.setItem('foodWishList' , result)

    } catch (error) {
        
    }
    
    } 

    const remove = async (key) =>{

      try {
        
        const arr = await AsyncStorage.getItem('foodWishList');
        
        console.log("Before"+ arr)
        const result =arr.replace(key, '') // replace string to remove key of clicked restaurant
       console.log("After"+ result)
        AsyncStorage.setItem('foodWishList' , result)

  
      } catch (error) {
        //console.log("Hello" +error)
          
      }

    }
  
  function updateFood  (key, foodData) {
    //console.log("Update fun call : ")
    dispatch({ type: 'UPDATE', payload: { key: key, data: foodData } });

    // to persist wishlist data 
    // use Async Storage

    if(foodData.wishlist)
    {
      
      push(key); // to add key in wishlist 
    }
    else{
      remove(key); // to remove key in wishlist 
    }
  
  }

  const value = {
    
   foodState: foods,
   updateFood:updateFood,
  };

    return(
        <FoodContext.Provider value={value}>
            {children}
        </FoodContext.Provider>
    )

}


export {FoodContext , FoodContextProvider};

