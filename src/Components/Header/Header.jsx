import search from '../../assets/image/search.png'
import profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <div className='flex flex-wrap justify-between items-center p-2 '>
           
            <div className="mb-4 sm:mb-0">
                <h1 className="text-3xl font-bold">Recipe Calories</h1>
            </div>

            <div className="mb-4 sm:mb-0">
                <ul className="flex space-x-6">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Search</a></li>
                </ul>
            </div>
            
           <div className='flex gap-2 lg:gap-10'>
            <div className="flex lg:gap-3 mb-4 sm:mb-0  bg-gray-300 px-2 py-1 rounded-2xl">
                <img src={search} alt="" />
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 md:px-2 py-1 rounded-md"
                />
               
            </div>
            <div className="profile-icon">
                <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
            </div>
            </div>
        </div>
    );
};

export default Header;
