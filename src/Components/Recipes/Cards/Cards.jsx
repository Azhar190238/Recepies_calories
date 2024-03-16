 import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Card from "./Card/Card";
import Cooks from "./Cooks/Cooks";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [cooks, setCooks] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    const wantToCookHandler = (card) => {
        if (!cooks.some(cook => cook.recipe_name === card.recipe_name)) {
            const newCooks = [...cooks, card];
            setCooks(newCooks);
        } else {
            toast.error("This food is already exist as cooked!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className="flex">
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        wantToCookHandler={wantToCookHandler}
                    />
                ))}
            </div>
            <div>
                <Cooks cooks={cooks} />
            </div>
            <ToastContainer />
        </div>
    );
};

Cards.propTypes = {
    wantToCookHandler: PropTypes.func,
    cooks: PropTypes.array
};

export default Cards;
