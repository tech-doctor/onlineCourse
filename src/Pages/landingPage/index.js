import React from 'react'
import FeaturedCourses from './featuredCourses'
import AboutInstructor from "./aboutInstructor"
import AboutProject from './aboutProject';
import HeroSection from './heroSection';
import '../../Styles/landingPage.scss'
import Layout from '../../Component/Layout';

const  LandingPage = () => {
 
  return (
    <div>
      <Layout>
        <hr/>
         <HeroSection/>
        <hr/>
          <FeaturedCourses/>
          <hr/>
          <AboutProject/>
          <hr/>
          <AboutInstructor/>
      </Layout>   
    </div>
  )
}


export default LandingPage