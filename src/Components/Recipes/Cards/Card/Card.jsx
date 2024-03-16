// import Ingredients from "./Ingredients/Ingredients";
import time from '../../../../assets/image/time.png';
import calorie from '../../../../assets/image/calories.png';
import PropTypes  from 'prop-types';
const Card = ({card,wantToCookHandler}) => {
    const {recipe_image,recipe_name ,short_description,ingredients,preparing_time,calories}=card;
    return (

        <div className='card w-96 bg-base-100 shadow-xl px-10 py-10 pt-10 space-y-5'>
            <div className="">
  <figure className="">
    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold">{recipe_name}</h2>
    <p className="text-[#878787]  mb-2 border-b-2">{short_description}</p>
    <div className='border-b-2'><h1 className="text-xl  font-semibold">Ingredients:{ingredients.length}</h1>
            {ingredients.map((ingredient, idx) => (
                <span key={idx}>
                  
                    <a href="">
                         <ul className="list-disc ml-6 text-[#878787] ">
                            <li>{ingredient}</li>
                            </ul>
                    </a>
                </span>
            ))}
        </div>
    <div className='flex gap-10 '>
    <div className='flex gap-3 mt-5'>
            <img src={time} alt="" />
            <p>{preparing_time}<span> minutes</span></p>
        </div>
        <div className='flex gap-3 mt-5'>
            <img src={calorie} alt="" />
            <p>{calories}<span> calories</span></p>
        </div>
    </div>

    <div className="card-actions">
      <button onClick={()=>wantToCookHandler(card)} className="bg-[#0BE58A] px-5 py-3 rounded-3xl my-5 text-black font-semibold">Want to Cook</button>
    </div>
  </div>
</div>
        </div>


    );
};
Card.propTypes={
    card:PropTypes.array,
    wantToCookHandler:PropTypes.func

  }

export default Card;