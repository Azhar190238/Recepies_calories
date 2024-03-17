
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'


function App() {
  

  return (
    <div className='lg:mx-20 my-10'>
{/* all Components here */}
     <Header></Header>
     <Banner></Banner>
     <Recipes></Recipes>
   
    </div>
  )
}

export default App
