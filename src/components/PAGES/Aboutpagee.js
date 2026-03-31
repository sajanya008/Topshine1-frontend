import React from 'react'
import Navigation from '../Navigation/Nav'
import Aboutpage from '../ABOUTPAGE/Aboutpage'
import Footer from '../FOOTER/Footer'
import WhyChoose from '../choose us/Whychoose'
import StepsSection from '../HOWWORK/Howitwork'
import About from '../ABOUT/About'
import Whatsapp from '../WHATSAPP/Whatsapp'




const Aboutpagee = () => {
  return (
    <div>
        <Navigation/>
        <Aboutpage/>
        <About/>
       
        <StepsSection/>
         <WhyChoose/>
     
        <Footer/>
        <Whatsapp/>
        
      
    </div>
  )
}

export default Aboutpagee
