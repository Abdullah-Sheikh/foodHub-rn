import React, { useEffect, useReducer, useState } from "react";
import createPersistedState from 'use-persisted-state';
import AsyncStorage from "@react-native-async-storage/async-storage";




const useCounterState = createPersistedState('restaurantsData');
 



  const restaurantsData = [


            {key: '1' ,name:`McDonald's`,image: require('../assets/images/Mcdonald.jpg'  ) , deiveryTime:"10-15" ,category:['FASTFOOD' , 'CHICKEN' , 'BURGER'] , rating:'4.6', wishlist : false}  ,
            {key: '2' ,name:`Dunkin Donut's`,image: require('../assets/images/dunkinDonuts.jpg'  ) , deiveryTime:"15-20" ,category:['DONUT' , 'BAKESHOP' ] , rating:'4.8' , wishlist : false}  ,
            {key: '3' ,name:`Pizza Hut`,image: require('../assets/images/PizzaHut.png'  ) , deiveryTime:"15-20" ,category:['PIZZA' , 'CHICKEN' , 'FASTFOOD' ] , rating:'4.7' , wishlist : false}  ,
            {key: '4' ,name:`Bundu Khan`,image: require('../assets/images/bunduKhan.jpg'  ) , deiveryTime:"30-45" ,category:['ASIAN' , 'CHICKEN' ] , rating:'4.3' , wishlist : false}  ,
            {key: '5' ,name:`Tao Pan`,image: require('../assets/images/taoPan.jpg'  ) , deiveryTime:"25-35" ,category:['MEXICAN' , 'CHICKEN' ] , rating:'4.9' , wishlist : false}  ,
            {key: '6' ,name:`OD Donuts`,image: require('../assets/images/OD.jpg'  ) , deiveryTime:"15-20" ,category:['DONUT' , 'BAKESHOP' ] , rating:'4.9' , wishlist : false}  ,
            {key: '7' ,name:`Hardee's`,image: require('../assets/images/Hardees.jpg'  ) , deiveryTime:"15-20" ,category:['FASTFOOD' , 'CHICKEN' , 'BURGER'] , rating:'4.8', wishlist : false}  ,


]



const DataContext = React.createContext({
    restaurantsState: [],
    updateRestaurant: (key, { wishlist }) => {},
  });

  function restaurantReducer(state, action) {
    switch (action.type) {
     
      case 'UPDATE':
        const updatableRestaurantIndex = state.findIndex(
          (restaurant) => restaurant.key === action.payload.key
        );
        const updatableRestaurant = state[updatableRestaurantIndex];
        const updatedItem = { ...updatableRestaurant, ...action.payload.data };
        const updatedRestaurants = [...state];
        updatedRestaurants[updatableRestaurantIndex] = updatedItem;
        //console.log("Update call : "+ updatedRestaurants[0].wishlist +  updatedRestaurants[0].name) 

        return updatedRestaurants;
      
      default:
        return state;
    }
  }

const ContextProvider = ({children}) => {


    const [updation , setUpdation] = useState('');
    const [restaurants , dispatch] = useReducer( restaurantReducer, restaurantsData );


    useEffect(() => {
      const fun =  async  () => {
        

        

        try {

        
          
        
        const arr = await AsyncStorage.getItem('restaurantsWishList');

        if(!arr)
        {
          AsyncStorage.setItem('restaurantsWishList' , '0')
        }

        console.log(arr[0])

        if(arr)
        {
        
       for (var i in restaurants) 
       for( var j in arr){
          if (restaurants[i].key == arr[j]) {
           // console.log(restaurants[i].name)
            const wishlist  = true
            updateRestaurant  (arr[j],{wishlist} )
           // restaurants[i].wishlist =  true;
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
        
      
      const arr = await AsyncStorage.getItem('restaurantsWishList');
      const check = arr.includes(key);
      if(check)
      {
        return
      }
      console.log("Before"+ arr)
     const result = arr.concat(key)
     console.log("After"+ result)
      AsyncStorage.setItem('restaurantsWishList' , result)

    } catch (error) {
        
    }
    
    } 

    const remove = async (key) =>{

      try {
        
      
        const arr = await AsyncStorage.getItem('restaurantsWishList');
        
        console.log("Before"+ arr)
        const result =arr.replace(key, '')
       console.log("After"+ result)
        AsyncStorage.setItem('restaurantsWishList' , result)

  
      } catch (error) {
        console.log("Hello" +error)
          
      }

    }
    


   

  

  function updateRestaurant  (key, restaurantData) {
    console.log("Update fun call : ")
    dispatch({ type: 'UPDATE', payload: { key: key, data: restaurantData } });

    if(restaurantData.wishlist)
    {
      push(key);
    }
    else{
      remove(key);
    }

    
   


    

    
    
    
  }

  const value = {
    
   restaurantsState: restaurants,
   updateRestaurant:updateRestaurant,
  };

    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )


}


export {DataContext , ContextProvider};

