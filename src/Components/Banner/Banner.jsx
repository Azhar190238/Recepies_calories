import header from '../../assets/image/header.png';

const Banner = () => {
    return (
        <div className="mt-8 w-80 lg:w-full  bg-cover rounded-xl" style={{backgroundImage: `url(${header})`, backgroundRepeat: 'no-repeat' }}>
            <div className="bg-opacity-60"></div>
            <div className="text-center">
                <div className="">
                    <h1 className="text-2xl lg:text-5xl pt-10 lg:pt-32 text-white font-bold"> Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className="mt-6 lg:mt-20 text-white">Recipe calorie calculator - get personalized and detailed nutrition facts for any recipe. <br /> Just copy & paste a list of ingredients from any website of your choice or see sample recipe report.</p>
                    <div className='mt-10 pb-14 lg:pb-28 space-x-6'>
                    <button className="bg-[#0BE58A] px-5 py-3 rounded-3xl">Explore Now</button>
                    <button className="border border-zinc-300 text-white border-solid  px-5 py-3 rounded-3xl">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

