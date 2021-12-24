import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import FeaturedCourses from './featuredCourses'
import AboutInstructor from "./aboutInstructor"
import AboutProject from './aboutProject'
import Subscribe from './subscribe'
import { Spinner} from "@chakra-ui/react"
import '../../Styles/landingPage.scss'


const  LandingPage = () => {
  return (
    <div>
        <Header/>
        <hr/>
        <h3>Center div</h3>
        <hr/>
        <div style = {{textAlign: 'center'}} >
          <Spinner  size="xl"/>
        </div>
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