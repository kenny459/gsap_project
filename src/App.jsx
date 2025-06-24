import React from 'react' 
import { gsap } from 'gsap/gsap-core' 
import { SplitText } from 'gsap/all' 
 
gsap.registerPlugin(SplitText)

const App = () => { 
    let split = SplitText.create("h1", { type: "chars",  
        autoSplit: true, 
        onSplit: (chars) => {
          gsap.from(chars, {
            duration: 0.5,
            opacity: 0,
            x: 50,
            stagger: 0.1,
            ease: "back.out(1.7)",
          });
        },
    
     });

  return (  
   
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
      <h1 className='text-4xl text-white font-bold'>Hello, GSAP with Tailwind CSS!</h1> 
       <h2 className='text-white font-bold'>This is Awesome</h2> 
    </div>
  )
}

export default App