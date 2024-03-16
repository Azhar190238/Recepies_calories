import Card from "./Card/Card";
import Cooks from "./Cooks/Cooks"
import { useEffect } from "react";
import { useState } from "react";
import PropTypes  from 'prop-types';

const Cards = () => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data =>setCards(data))
    },[])
//want to cook handle
    const [cooks, setCooks] = useState([]);
    const wantToCookHandler = card =>{
        const newCooks=[...cooks,card];
        setCooks(newCooks);

    }
    return (

        <div className="flex">
        <div className="  md:w-2/3 grid grid-cols-1 md:grid-cols-2">
        {
            cards.map(card=> <Card 
                key={card.id}
                card={card}
                wantToCookHandler={wantToCookHandler}
                ></Card>)    
        }

        </div>
        <div>
        {
            <Cooks cooks={cooks}></Cooks>
                      
        }
        </div>
        
        </div>
    );
};
Cards.propTypes={
    wantToCookHandler:PropTypes.func,
    cooks:PropTypes.array

  }

export default Cards;