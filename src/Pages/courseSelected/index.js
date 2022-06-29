import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Component/Layout';
import otherCourses from './otherCourses';
import CategoryDetails from './categoryDetails'
import Review from './review'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncSelectedCourses, getSelectedCourse } from '../../Store/courseSlice'
import moment from 'moment'
import '../../Styles/courseSelected.scss'
import OtherCourses from './otherCourses';

const  CourseSelected = ()  => {
  const selectedCourses = useSelector(getSelectedCourse);
  const dispatch = useDispatch();
  const {id} = useParams();
 
  useEffect(() => {
    dispatch(fetchAsyncSelectedCourses(id))
},[dispatch,id]);

	return (
		<div className = "courseSelected">
      <Layout>
        <div className = "courseSelectedContainer">
          {selectedCourses.length !== 0 &&  <CategoryDetails 
          id = {selectedCourses[0].id}
          title = {selectedCourses[0].snippet.localized.title}
          description = {selectedCourses[0].snippet.localized.description}
          duration = {ISO8601toDuration(selectedCourses[0].contentDetails.duration)}
          likeCount = {selectedCourses[0].statistics.likeCount}
          viewCount = {selectedCourses[0].statistics.viewCount}
          embedLink = {selectedCourses[0].player.embedHtml}
          publishedAt = {moment(selectedCourses[0].snippet.publishedAt).fromNow()}
          price = {Math.floor(new Date(selectedCourses[0].snippet.publishedAt).getDate() + '0')}
          bestSelling = {Math.floor(new Date(selectedCourses[0].snippet.publishedAt).getDate() + '0') > 160}
          />}
          </div>
        <div className = "center_div">
        <Review/>
        <OtherCourses/>	
        </div>
			</Layout>	
		</div>
	)
}

export default CourseSelected;

/// code to format time unit
function formatTimeUnit(input, unit){
  var index = input.indexOf(unit);
  var output = "00"
 if(index < 0){
   return output;
 }

 if(isNaN(input.charAt(index-2))){
   return '0' + input.charAt(index-1);
 }else{
   return input.charAt(index-2) + input.charAt(index-1);
 }
}

function ISO8601toDuration(input){
  var H = formatTimeUnit(input, 'H');
  var M = formatTimeUnit(input, 'M');
  var S = formatTimeUnit(input, 'S');

 if(H === "00"){
   H = "";
 }else{
   H += ":"
 }

 return H  + M + ':' + S ;
}


