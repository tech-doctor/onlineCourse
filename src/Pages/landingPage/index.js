import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import FeaturedCourses from './featuredCourses'
import AboutInstructor from "./aboutInstructor"
import AboutProject from './aboutProject'
import Subscribe from './subscribe'
import '../../Styles/landingPage.scss'

const  LandingPage = () => {
 
  return (
    <div>
        <Header/>
        <hr/>
        <h3>Center div</h3>
        <hr/>
        <FeaturedCourses/>
        <hr/>
        <AboutProject/>
        <hr/>
        <AboutInstructor/>
        <hr/>
        <Subscribe/>
        <hr/>
        <Footer/>
    </div>
  )
}


export default LandingPage