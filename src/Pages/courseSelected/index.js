import React, {useEffect} from 'react'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import '../../Styles/courseSelected.scss'
import SameCategory from './sameCategory'
import CategoryDetails from './categoryDetails'
//import { Spinner} from "@chakra-ui/react"
import Review from './review'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncSelectedCourses, getSelectedCourse } from '../../Store/courseSlice'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const  CourseSelected = ()  => {
  const selectedCourses = useSelector(getSelectedCourse);
  //const loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  const dispatch = useDispatch();
  const {id} = useParams();
 
  useEffect(() => {
    dispatch(fetchAsyncSelectedCourses(id))
},[dispatch,id]);


if(selectedCourses.length !== 0){
//console.log(selectedCourses[0]);
//console.log(moment.duration('PT5M33S').format('hh:mm:ss'))
}

//ISO8601toDuration('PT5M33S')

//moment(data.snippet.publishedAt).fromNow()
	return (
		<div className = "courseSelected">
      <div>
				<Header/>
			</div>
			<hr/>
			<div className = "center-div">
			  <div>
            <CategoryDetails 
            id = {selectedCourses.length !== 0? selectedCourses[0].id: null}
            title = { selectedCourses.length !== 0? selectedCourses[0].snippet.localized.title: null}
            description = { selectedCourses.length !== 0? selectedCourses[0].snippet.localized.description: null}
            duration = { selectedCourses.length !== 0? ISO8601toDuration(selectedCourses[0].contentDetails.duration) : null}
            likeCount = { selectedCourses.length !== 0? selectedCourses[0].statistics.likeCount : null}
            viewCount = { selectedCourses.length !== 0? selectedCourses[0].statistics.viewCount : null}
            embedLink = { selectedCourses.length !== 0? selectedCourses[0].player.embedHtml : null}
            publishedAt = { selectedCourses.length !== 0? moment(selectedCourses[0].snippet.publishedAt).fromNow() : null}
           />
        </div>
				<hr/>
				<div>
         <SameCategory/>
        </div>
				<hr/>
				<div>
          <Review/>
        </div>	
			</div>
      <hr/>
			<div>
				<Footer/>
			</div>	
		</div>
	)
}

export default CourseSelected

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


