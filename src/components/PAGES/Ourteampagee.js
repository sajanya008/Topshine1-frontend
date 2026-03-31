import React from 'react'
import Navigation from '../Navigation/Nav'

import Footer from '../FOOTER/Footer'
import CleaningExperts from '../EXPERT/Expert'
import Whatsapp from '../WHATSAPP/Whatsapp'
import Expertpage from '../Expertpage/Expertpage'




export default function Ourteampagee() {
  return (
    <div>
        <Navigation/>
       <Expertpage/>
        <CleaningExperts/>
        <Footer/>
        <Whatsapp/>
      
    </div>
  )
}
