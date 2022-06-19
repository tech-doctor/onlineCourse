import React,{useRef, useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { CourseSection, SliderContainer, Heading } from './styles/course';

const  CourseSlider = ({children, noHeading, heading, subHeading}) => {
  let myRef = useRef();
  const [changeLeftStyle, setChangeLeftStyle] = useState(true);
  const [changeRightStyle, setChangeRightStyle] = useState(false);

  const slideLeft  =() => {
    myRef.current.scrollLeft -= 500;
    if(myRef.current.scrollLeft <= 500 ){
      setChangeLeftStyle(true)
      setChangeRightStyle(false)
    }
  }
  
  const slideRight =() => {
    myRef.current.scrollLeft += 500; 
    if(myRef.current.scrollLeft >= myRef.current.scrollWidth - myRef.current.clientWidth){
      setChangeLeftStyle(false)
      setChangeRightStyle(true) 
    }else{
      setChangeLeftStyle(false);
    }
  }

  const handleScroll = () => {
    if(myRef.current.scrollLeft >= myRef.current.scrollWidth - myRef.current.clientWidth){
      setChangeRightStyle(true)
      setChangeLeftStyle(false)
    }else if(myRef.current.scrollLeft <= 500){
      setChangeLeftStyle(true)
      setChangeRightStyle(false)
    }else{
      setChangeLeftStyle(false)
      setChangeRightStyle(false)
    }
  }

  return (
    <CourseSection style={noHeading && {margin:'0em '}}>
      {!noHeading &&
      <Heading>
      <div className=' course_section_heading'>
        <p className="fancy"><span>{heading}</span></p>
        </div>
        <div className='sub_heading'>
          <p>{subHeading}</p>
      </div>
      </Heading>}
        <SliderContainer  className='slider_container'>
          <div 
          style={ changeLeftStyle? {backgroundColor: '#02897A', color: 'white'} : {}}
          className='angle angle_left'>
            <ChevronLeftIcon
              onClick={slideLeft}
              w={6} h={6}
             />
          </div>
          <div ref={myRef}
          onScroll={handleScroll}
           className='slider'>
            {children}
          </div>
          <div 
          style={ changeRightStyle ? {backgroundColor: '#02897A', color: 'white'} : {}}
          className=' angle angle_right'>
            <ChevronRightIcon 
            onClick={slideRight}
            w={6} h={6}
            />
            </div>
        </SliderContainer>
    </CourseSection>
  );
}

export default CourseSlider;