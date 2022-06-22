import React, {useEffect} from 'react';
import Header from '../../Component/Header/desktopHeader/Header';
import Footer from '../../Component/Footer';
import '../../Styles/categoryListPage.scss';
//import AllCategories from './allCategories'
import AllCategories from '../categoryListPage/allCategories';
import { Stack,Skeleton} from "@chakra-ui/react"
import { fetchAsyncCourses, getAllcourses, updateStatus } from '../../Store/courseSlice';
import TopCourses from '../categoryListPage/topCourses';
import { useDispatch, useSelector } from 'react-redux';


const  Random = ()  => {
  const topCourses = useSelector(getAllcourses);
  const loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  const dispatch = useDispatch();
  const courseStatus = useSelector(state => state.rootReducer.courseSlice.status);


  useEffect(() => {
    let mounted = true;
    if (mounted) {
    //if (courseStatus === 'idle') {
      dispatch(fetchAsyncCourses()) 
    //}
  }
  return () => {
    mounted = false;
    dispatch(updateStatus('idle'))
    console.log('unmounting')
  }  
},[dispatch]);


	return (
		<div>
		  <div>
			  <Header/>
			</div>
			<div style = {{margin: "0 3%"}} className = "eachCategoryList">
			    <div>
            {topCourses.length !== 0  && <TopCourses
            topCourses = {topCourses}
            titleFunc = {"Random"}
            />} 
          </div>
        <hr/>
				<div> 
          {topCourses.length === 0 ?    
          <div>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
          </div> :
			  	<AllCategories
          topCourses = {topCourses}
          //loading= {loading}
          titleFunc = {"Random"}
          />} 
				</div>
			</div>
			<div>
			 <Footer/>
			</div>		
		</div>
	)
}

export default Random
