import React from 'react'
import './BuyHero.css'
import Btn from "../../../Components/Btn/Btn";
import { motion } from "framer-motion";


export default function BuyHero() {
  return (
    <>
      <section className='buyhero'>

       <motion.div 
       className='leftsidetext'
       initial={{ opacity: 0, y: 50 }} // Start with the card hidden and below the view
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position when in view
        transition={{ duration:0.5, delay: 0.25}} // Duration for the animation
        viewport={{ once: true }}
        >
        <h1>Buy Online </h1>
        <p>Curated selection of coffee, delivered to your doorstep</p>

        <h6>After we harvest coffee from our farm, our experts process them with the greatest care; subsequently, they are immediately packaged, preserving freshness, and sent off to all our outlets.</h6>
                 


        <Btn/>

       </motion.div>

       
       <motion.div
         initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration:0.5, delay: 0.75}} 
        viewport={{ once: true }}
        >
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/product-jaba.jpg' alt='product'/>
       </motion.div>
       

       <motion.div className='rightsidetext'
       initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration:0.5, delay:1}} 
        viewport={{ once: true }}
       >

       <div>
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/javacup.jpg' alt='product'/>
       </div>

        <h5 title='why'><b>Why java Coffee ?</b></h5>

        <p>Himalayan Java offers its customers the best-tasting coffee beverages in the country.</p>

        <p>We have achieved this by using high-quality ingredients.</p>

        
       </motion.div>


      </section>
       



       <section className='imgsection'>
  
        <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration:0.5, delay: 0.25}} 
        viewport={{ once: true }}
        >
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/coffee1.png' alt='product'/>
        <h6>EVEREST ROAST</h6>
        </motion.div>


        <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration:0.5, delay: 0.5}} 
        viewport={{ once: true }}
        >
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/coffee2.png' alt='product'/>
        <h6>THAMEL ROAST</h6>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration:0.5, delay: 0.75}} 
        viewport={{ once: true }}
        >
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/coffee3.png' alt='product'/>
        <h6>ESPRESSO ROAST</h6>
        </motion.div>


        <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration:0.5, delay: 1}} 
        viewport={{ once: true }}
        >
        <img src='https://himalayanjava.com/wp-content/uploads/2023/10/Untitled-design-6.png' alt='product'/>
        <h6>MEDIUM ROAST</h6>
        </motion.div>


       </section>


    </>
  )
}
