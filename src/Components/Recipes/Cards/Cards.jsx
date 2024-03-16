import Card from "./Card/Card";
import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data =>setCards(data))
    },[])
    return (

        
        <div className="  md:w-2/3 grid grid-cols-1 md:grid-cols-2">
         
        
        {
            cards.map(card=> <Card 
                key={card.id}
                card={card}
                // handleAddBookmark={handleAddBookmark} 
                // handleMarkRead={handleMarkRead}

                ></Card>)
               
        }

        </div>
       
    );
};

export default Cards;