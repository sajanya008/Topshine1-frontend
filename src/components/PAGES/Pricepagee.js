import React from 'react'
import Navigation from '../Navigation/Nav'
import Pricepage from '../PRICEPAGE/Pricepage'
import Footer from '../FOOTER/Footer'
import ServicePackages from '../PRICE/Pricing'
import Whatsapp from '../WHATSAPP/Whatsapp'

export default function Pricepagee() {
  return (
    <div>
        <Navigation/>
        <Pricepage />
        <ServicePackages/>
        <Footer/>
        <Whatsapp/>
      
    </div>
  )
}
