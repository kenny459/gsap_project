import { useGSAP } from '@gsap/react'
import React from 'react' 
import gsap from 'gsap' 
import { cocktailLists, mockTailLists } from '../../constants'

const Cocktails = () => { 
     useGSAP(() => { 
      const parallexTimeline =  gsap.timeline({ 
            scrollTrigger:{ 
                trigger: '#cocktails', 
                start: 'top 30%', 
                end: 'bottom 80%', 
                scrub:true
            }
        }) 
         
        parallexTimeline 
        .from("#c-left-leaf", { 
            y: 100, 
            x: -100
        }) 
         
        .from("#c-right-leaf", { 
            y: -100, 
            x: -100
        }) 
     })

  return (
    <section>   
         
         <section id="cocktails" className="noisy">
	 <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
	 <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
	 
	 <div className="list">
		<div className="popular">
		 <h2>Most popular cocktails:</h2>
		 
		 <ul>
			{cocktailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="md:me-28">
				 <h3>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="loved">
		 <h2>Most loved mocktails:</h2>
		 
		 <ul>
			{mockTailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="me-28">
				 <h3>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
	 </div>
	</section>
 

         

         

    </section>
  )
}

export default Cocktails