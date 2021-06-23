import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import FeaturedCourses from './featuredCourses'
import AboutInstructor from "./aboutInstructor"
import AboutProject from './aboutProject'
import Subscribe from './subscribe'
import { Spinner,Skeleton , Stack} from "@chakra-ui/react"
import '../../Styles/landingPage.scss'


const  LandingPage = () => {
  return (
    <div>
        <Header/>
        <hr/>
        <Spinner size="xl"/>
        <Stack>
  <Skeleton height="20px" />
  <Skeleton height="20px" />
  <Skeleton height="20px" />
</Stack>
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