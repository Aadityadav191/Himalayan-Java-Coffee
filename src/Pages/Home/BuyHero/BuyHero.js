import React from 'react'
import './BuyHero.css'
import Btn from "../../../Components/Btn/Btn";


export default function BuyHero() {
  return (
    <>
      <section className='buyhero'>

       <div className='leftsidetext'>
        <h1>Buy Online </h1>
        <p>Curated selection of coffee, delivered to your doorstep</p>

        <h6>After we harvest coffee from our farm, our experts process them with the greatest care; subsequently, they are immediately packaged, preserving freshness, and sent off to all our outlets.</h6>
                 


        <Btn/>

       </div>

       
       <div>
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/product-jaba.jpg' alt='product'/>
       </div>
       

       <div className='rightsidetext'>

       <div>
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/javacup.jpg' alt='product'/>
       </div>

        <h5 title='why'><b>Why java Coffee ?</b></h5>

        <p>Himalayan Java offers its customers the best-tasting coffee beverages in the country.</p>

        <p>We have achieved this by using high-quality ingredients.</p>

        
       </div>


      </section>
       



       <section className='imgsection'>
  
        <div>
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/coffee1.png' alt='product'/>
        <h6>EVEREST ROAST</h6>
        </div>


        <div>
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/coffee2.png' alt='product'/>
        <h6>THAMEL ROAST</h6>
        </div>

        <div>
        <img src='https://himalayanjava.com/wp-content/uploads/2023/08/coffee3.png' alt='product'/>
        <h6>ESPRESSO ROAST</h6>
        </div>


        <div>
        <img src='https://himalayanjava.com/wp-content/uploads/2023/10/Untitled-design-6.png' alt='product'/>
        <h6>MEDIUM ROAST</h6>
        </div>


       </section>


    </>
  )
}
