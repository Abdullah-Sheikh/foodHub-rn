import React, { useReducer, useState } from "react";


const restaurantsData = [

            {key: '1' ,name:`McDonald's`,image: require('../assets/images/Mcdonald.jpg'  ) , deiveryTime:"10-15" ,category:['FASTFOOD' , 'CHICKEN' , 'BURGER'] , rating:'4.6', wishlist : false}  ,
            {key: '2' ,name:`Dunkin Donut's`,image: require('../assets/images/dunkinDonuts.jpg'  ) , deiveryTime:"15-20" ,category:['DONUT' , 'BAKESHOP' ] , rating:'4.8' , wishlist : false}  ,
            {key: '3' ,name:`Pizza Hut`,image: require('../assets/images/PizzaHut.png'  ) , deiveryTime:"15-20" ,category:['PIZZA' , 'CHICKEN' , 'FASTFOOD' ] , rating:'4.7' , wishlist : false}  ,
            {key: '4' ,name:`Bundu Khan`,image: require('../assets/images/bunduKhan.jpg'  ) , deiveryTime:"30-45" ,category:['ASIAN' , 'CHICKEN' ] , rating:'4.3' , wishlist : false}  ,
            {key: '5' ,name:`Tao Pan`,image: require('../assets/images/taoPan.jpg'  ) , deiveryTime:"25-35" ,category:['MEXICAN' , 'CHICKEN' ] , rating:'4.9' , wishlist : false}  ,
            {key: '6' ,name:`OD Donuts`,image: require('../assets/images/OD.jpg'  ) , deiveryTime:"15-20" ,category:['DONUT' , 'BAKESHOP' ] , rating:'4.9' , wishlist : false}  ,
            {key: '7' ,name:`Hardee's`,image: require('../assets/images/Hardees.jpg'  ) , deiveryTime:"15-20" ,category:['FASTFOOD' , 'CHICKEN' , 'BURGER'] , rating:'4.8', wishlist : false}  ,


];


const DataContext = React.createContext({
    restaurants: [],
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
        return updatedRestaurants;
      
      default:
        return state;
    }
  }

const ContextProvider = ({children}) => {

    const [restaurants , dispatch] = useReducer( restaurantReducer, restaurantsData);

  

  function updateRestaurant(key, restaurantData) {
    dispatch({ type: 'UPDATE', payload: { key: key, data: restaurantData } });
  }

  const value = {
    
   restaurants: restaurants,
    updateRestaurant:updateRestaurant,
  };

    return(
        <DataContext.Provider value={restaurants}>
            {children}
        </DataContext.Provider>
    )


}

export {DataContext , ContextProvider};

