import About from '@/About-us/page'
import Category from '@/Category/page'
import ChooseUS from '@/ChosseUs/page'
import Hero from '@/components/Hero'
import MenuHero from '@/components/MenuHero'
import Navbar from '@/components/Navbar'
import Chef from '@/Chef/page'
import React from 'react'
import Testimonials from '@/Testimonials/page'
import AlProductss from './Shop/Alproducts'
import SomeFood from './Shop/SomeFood'



const page = () => {
  return (<>
  
  <Navbar/>
  <Hero/>
  <About/>
  <Category/>
  <ChooseUS/>
  <Chef/>
  <Testimonials/>
  <SomeFood/>


  
  
  </>
    
  )
}

export default page