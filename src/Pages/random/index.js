import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllCategories from '../categoryListPage/allCategories';
import { Stack,Skeleton} from "@chakra-ui/react"
import { fetchAsyncCourses, getAllcourses, updateStatus } from '../../Store/courseSlice';
import TopCourses from '../categoryListPage/topCourses';
import '../../Styles/categoryListPage.scss';
import Layout from '../../Component/Layout';

const  Random = ()  => {
  const topCourses = useSelector(getAllcourses);
  const dispatch = useDispatch();


  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchAsyncCourses()) 
  }
  return () => {
    mounted = false;
    dispatch(updateStatus('idle'))
    //console.log('unmounting')
  }  
},[dispatch]);


	return (
    <Layout>
      <div style = {{margin: "0 3%"}} className = "eachCategoryList">
        {topCourses.length !== 0  && <TopCourses
        topCourses = {topCourses}
        titleFunc = {"Random"}
        />} 
        <hr/> 
        {topCourses.length === 0 ?    
          <Stack>
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
          </Stack> :
        <AllCategories
        topCourses = {topCourses}
        titleFunc = {"Random"}
        />} 
      </div>
    </Layout>		
	)
}

export default Random
