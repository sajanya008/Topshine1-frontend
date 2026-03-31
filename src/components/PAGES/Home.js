import React from 'react'
import Nav from '../Navigation/Nav'
import Crsl from '../CAROUSEL/Carousel'
import About from '../ABOUT/About'
import Service from '../SERVICE/Service'
import WhyChoose from '../choose us/Whychoose'
import Testimonial from '../TESTMONIAL/Testmonial'
import Footer from '../FOOTER/Footer'
import HowItWorks from '../HOWWORK/Howitwork'

import BookCleaning from '../BOOK/Book'
import ServicePackages from '../PRICE/Pricing'
import CleaningExperts from '../EXPERT/Expert'
import RecentWorks from '../RECENTWRK/Recentwork'
import Whatsapp from '../WHATSAPP/Whatsapp'


// import StaffNationality from '../STAFF/Staff'


export default function Home() {
  
  return (
    <div>
        <Nav />
        <Crsl />
        <About/>
        <Service />
        <WhyChoose />
        <HowItWorks />
        <ServicePackages/>
        <BookCleaning />
        <CleaningExperts />
        <RecentWorks />

        <Testimonial />
        <Footer />
        <Whatsapp />
        
        
       
        
      
    </div>
  )
}
