import React from 'react'
import FeaturedCourses from './featuredCourses'
import AboutInstructor from "./aboutInstructor"
import AboutProject from './aboutProject';
import HeroSection from './heroSection';
import '../../Styles/landingPage.scss'
import Layout from '../../Component/Layout';
import Recommended from './recommended';

const  LandingPage = () => {
 
  return (
    <div>
      <Layout>
         <HeroSection/>
          <div  className='center_div'>
            <FeaturedCourses/>
            {/* <AboutProject/>
            <hr/> */}
            <Recommended/>
            <AboutInstructor/>
          </div>
      </Layout>   
    </div>
  )
}


export default LandingPage