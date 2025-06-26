import React from 'react' 

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import gsap from 'gsap'
import { SplitText,ScrollTrigger } from 'gsap/all'
import Cocktails from './Components/Cocktails'

 gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => { 
    
    

  return (  
   <main> 
    <Navbar/> 
    <Hero/> 
    <Cocktails/>
   </main>
    
  )
}

export default App