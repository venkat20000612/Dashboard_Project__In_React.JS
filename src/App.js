import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidenavbar from './Components/Sidenavbar'
// import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Titlesection from './Components/Titlesection'
import Home from './Components/Home'
// import Nav from './Components/Nav'


const App = () => {
  return (
    <div className='bg-light'>
    <div className='container-fluid bg-grey'>
      <div className='row'>
        <div className='col-2 bg-white'>
          <Sidenavbar />
        </div>
        <div className='col'>
         <Navbar/>
         <Home/>
        </div>
            
        
      </div>
      
    </div>
    
    </div>

  )
}

export default App