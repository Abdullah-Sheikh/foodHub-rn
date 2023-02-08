import React, { useReducer, useState } from "react";


const restaurantsData = [
            {key: '1' ,name:`McDonald's`,image: require('../assets/images/Mcdonald.jpg'  ) , deiveryTime:"10-15" ,category:['FASTFOOD' , 'CHICKEN' , 'BURGER'] , rating:'4.6'}  ,
            {key: '2' ,name:`Dunkin Donut's`,image: require('../assets/images/dunkinDonuts.jpg'  ) , deiveryTime:"15-20" ,category:['DONUT' , 'BAKESHOP' ] , rating:'4.8'}  ,
            {key: '3' ,name:`Pizza Hut`,image: require('../assets/images/PizzaHut.png'  ) , deiveryTime:"15-20" ,category:['PIZZA' , 'CHICKEN' , 'FASTFOOD' ] , rating:'4.7'}  ,
            {key: '4' ,name:`Bundu Khan`,image: require('../assets/images/bunduKhan.jpg'  ) , deiveryTime:"30-45" ,category:['ASIAN' , 'CHICKEN' ] , rating:'4.3'}  ,
            {key: '5' ,name:`Tao Pan`,image: require('../assets/images/taoPan.jpg'  ) , deiveryTime:"25-35" ,category:['MEXICAN' , 'CHICKEN' ] , rating:'4.9'}  ,

];


const DataContext = React.createContext();

const ContextProvider = ({children}) => {

    const [restaurants , setRestaurants] = useState( restaurantsData);

    return(
        <DataContext.Provider value={restaurants}>
            {children}
        </DataContext.Provider>
    )


}

export {DataContext , ContextProvider};

