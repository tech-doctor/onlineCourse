import React, {useCallback, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Stack,Skeleton} from "@chakra-ui/react";
import TopCourses from './topCourses';
import AllCategories from './allCategories';
import { fetchAsyncCategories, getSelectedCategory} from '../../Store/courseSlice';
import Layout from '../../Component/Layout';
import '../../Styles/categoryListPage.scss';

const  CategoryListPage = ()  => {
  const dispatch = useDispatch();
  const {playlistId} = useParams();
  const topCourses = useSelector(getSelectedCategory);
  const courseStatus = useSelector(state => state.rootReducer.courseSlice.status);

useEffect(() => {
  let mounted = true;
  if(mounted){
    dispatch(fetchAsyncCategories(playlistId)) 
  }
  return () => {
    mounted = false;
  }
},[dispatch,playlistId]);


const titleFunc = useCallback(() => { 
  switch (playlistId) {
    case 'PLEu7Y7_blvLXlM820Uy30N8ay-eoZVyIK': 
      return('HTML');
    case 'PLEu7Y7_blvLVwibRK9szNWmTios4OsLF2':
      return( 'CSS' );
    case 'PLEu7Y7_blvLVNfrsztZmfWEw57lWyuUfI':
      return( 'Javascript' );
      case 'PLEu7Y7_blvLVVwb0lGCk9J1E4mJcDO808':
      return( 'JQuery' );
      //eslint-disable-next-line
    default:
      return( 'Random' );
  }
},[playlistId]);

  return (
     <Layout>
        <div className = "eachCategoryList center_div">
            <TopCourses
            topCourses = {topCourses}
            titleFunc = {titleFunc()}
            />
          <hr/> 
            {courseStatus === 'pending' &&
             <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              </Stack>  
              }
              {courseStatus === 'fufilled' &&
            <AllCategories
            topCourses = {topCourses}
            titleFunc = {titleFunc()}
            /> }
            {courseStatus === 'rejected' && 
            <div></div>
            }
        </div>
        </Layout>		
    )
  }



export default CategoryListPage
