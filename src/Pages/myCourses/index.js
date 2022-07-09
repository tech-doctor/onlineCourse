import React from 'react';
import Layout from '../../Component/Layout';
import { useSelector } from 'react-redux';
// import { Spinner} from "@chakra-ui/react";
import moment from 'moment';
import MyCourseCard from './myCourseCard';
import '../../Styles/myCourse.scss';


const  MyCourses = ()  => {
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)
  
	return (
		<div className  = "myCourse ">
			<Layout>
			<div className='center_div'>
      { purchasedItem && purchasedItem.length === 0 &&  <div style={{display: 'flex', justifyContent: 'center', padding: '7em 0', fontSize: '18px', color: 'grey', textAlign: 'center'}}>You haven't purchased any course yet!</div>}
      { purchasedItem && purchasedItem.length > 0 &&
       <>
        <div className = "my_course_title">
					<p>MY COURSES</p>
				</div>
				<div className  = "next-div">
					{purchasedItem.lenght === 0? 
					<div className = "no-course">
            <p>No course available</p>
					</div> :
					<div className = 'myCourse-div'>
						{/* <div style = {{textAlign: 'center'}} >
							<Spinner  size="xl"/>
						</div> */}
						<div className='my_course_slider'>
              {purchasedItem.map((data,index) => 
                <MyCourseCard
                  key = {index}
                  id = {data.videoId}
                  imageAlt ={data.title}  
                  imageSrc = {data.imageUrl}
                  title = {data.title}
                  date = {moment(data.publishedAt).fromNow()}
                  newPrice = {new Date(data.publishedAt).getDate() + '0'}
                  oldPrice = {Math.floor(new Date(data.publishedAt).getDate() + '0') + 30}
                  data = {data}
                />
              )}
						</div>
					</div>}	
				</div> 
      </>}
        
			</div>
			</Layout>
		</div>
	)
}




export default MyCourses
