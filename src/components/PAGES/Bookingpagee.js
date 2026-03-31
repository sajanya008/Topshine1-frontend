import React from 'react'
import Navigation from '../Navigation/Nav'
import Bookpage from '../BOOKPAGE/Bookpage'
import BookCleaning from '../BOOK/Book'
import Footer from '../FOOTER/Footer'
import Whatsapp from '../WHATSAPP/Whatsapp'

export default function Bookingpagee() {
  return (
    <div>
      <Navigation/>
      <Bookpage/>
      <BookCleaning/>
      <Footer/>
      <Whatsapp/>
    </div>
  )
}
