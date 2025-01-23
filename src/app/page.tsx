import About from '@/About-us/page'
import Category from '@/Category/page'
import ChooseUS from '@/ChosseUs/page'
import Hero from '@/components/Hero'
import MenuHero from '@/components/MenuHero'
import Navbar from '@/components/Navbar'
import Chef from '@/Chef/page'
import React from 'react'
import Comment from '@/Comments/page'

const page = () => {
  return (<>
  
  <Navbar/>
  <Hero/>
  <About/>
  <Category/>
  <ChooseUS/>
  <Chef/>
  
  
  </>
    
  )
}

export default page