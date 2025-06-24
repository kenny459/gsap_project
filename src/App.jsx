import React from 'react' 

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import gsap from 'gsap'
import { SplitText,ScrollTrigger } from 'gsap/all'

 gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => { 
    
    

  return (  
   <main> 
    <Navbar/> 
    <Hero/> 
    <div className='h-dvh bg-black'></div>
   </main>
    
  )
}

export default App