import { useGSAP } from '@gsap/react'
import { SplitText,} from 'gsap/all' 
import React from 'react'  
import gsap from 'gsap'  
import { useRef } from 'react' 
import { useMediaQuery } from 'react-responsive'
 


const Hero = () => {    
     
     
     const videoRef = useRef(); 
      
     const isMobile = useMediaQuery({maxWidth:768})
    
    
    useGSAP(() => { 
        const heroSplit = new SplitText('.title', {type: 'chars'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});  
         
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient')); 
         
        gsap.from(heroSplit.chars,{  
        yPercent:100,  
        duration: 1.8, 
        ease: 'expo.out', 
        stagger: 0.1

        }) 
         
         
        gsap.from(paragraphSplit.lines, {   
        opacity: 0,
        yPercent:100,  
        duration: 1.8, 
        ease: 'expo.out', 
        stagger: 0.1,  
        delay: 1


        }) 
         
         
        gsap.timeline({ 
            scrollTrigger: { 
                trigger: '#hero', 
                start: 'top top', 
                end:'bottom top', 
                scrub:true,
            }
        }) 
        .to('.right-leaf',{y: 200}, 0) 
        .to('.left-leaf',{y: -200}, 0) 
         
        // create a gsap timeline for that animtes the video as the user scroll throuh the hero.  
       const startValue = isMobile? "top 50%" : "center 60%"
       const endValue = isMobile ? "120% 50%" : "bottom top" 
        
    const tl =     gsap.timeline({ 
            scrollTrigger: { 
                trigger: 'video', 
                start: startValue, 
                end: endValue, 
                scrub: true,  
                pin: true,
                markers: false,  

            }
        })   
        // apply scale and opacity to the video as the user scrolls through the hero section
        tl.to(videoRef.current, {    
            scale: 1.2, 
            opacity: 0.5, 
            duration: 1, 
            ease: 'power1.inOut', 
        }, 0)

         
        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {  
                currentTime: videoRef.current.duration, 
                 
                duration: videoRef.current.duration, 
            })
        }
       
    
    },[])
  return (  
    <>
     
    <section id='hero'className='noisy'>  

        <h1 className='title'>YAMAL</h1>  
         
         <img src="/images/hero-left-leaf.png"  
         alt="left-leaf"  
         className='left-leaf' 
          />
         <img src="/images/hero-right-leaf.png"  
         alt="right-leaf"  
         className='right-leaf'
          />

     <div className='body'>  
        <div className='content'>  
            <div className='space-y-5 hidden md:block'>  
                <p> 
                    Finese. Crisp. World Class
                </p> 
                 
                 <p className='subtitle'>   
                Sip the Spirit <br /> of Summer

                 </p>

            </div> 
             
             <div className='view-cocktails'>  
                <p className='subtitle'>  
                    Every cocktail on our menu is a blend of premium ingredients, inspired by the brilliance 
                    of yamal- designed to make you unlock your full potential 

                </p> 
                <a href="#cocktails">View Cocktails</a>

             </div>

        </div>

     </div>

    </section>  
     
    <div>   
         
         <video  
         ref = {videoRef}
         src='/videos/input.mp4'  
         muted 
         playsInline
          
         preload="auto" 
    

          />
         </div>

 </>
  )
}

export default Hero