
import Cards from "./Cards/Cards";

const Recipes = () => {

    return (
        <div>
           <div className="mt-10 text-center space-y-7">
            <h1 className="text-4xl font-semibold">Our Recipes</h1>
            <p>Recipes. Find and share everyday cooking inspiration on Allrecipes. Discover recipes, cooks, videos, and how-tos <br /> based on the food you love and the friends you follow.</p>
           </div>
           <div >
            {/* card component */}
           <Cards> </Cards>
          
           </div>

           <div>
         
           </div>
        </div>
    );
};

export default Recipes;