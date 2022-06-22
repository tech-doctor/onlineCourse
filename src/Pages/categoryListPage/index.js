import React, {useEffect} from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer'
import '../../Styles/categoryListPage.scss'
import AllCategories from './allCategories'
import { Stack,Skeleton} from "@chakra-ui/react"
import TopCourses from './topCourses'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchAsyncCategories, getSelectedCategory, updateLoading, updateStatus } from '../../Store/courseSlice'
import PageNotFound from '../pageNotFound'
import Layout from '../../Component/Layout'

const  CategoryListPage = ()  => {
  const topCourses = useSelector(getSelectedCategory);
  const loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  //const [loading, setLoading] = React.useState(false);
  const courseStatus = useSelector(state => state.rootReducer.courseSlice.status);
  const errorMessage = useSelector(state => state.rootReducer.courseSlice.errorMessage); 
  const dispatch = useDispatch();
  const {playlistId} = useParams();

//   useEffect(() => {
//     dispatch(updateLoading(true))
//     //setLoading(true)
//     dispatch(fetchAsyncCategories({categoriesId:playlistId, max: 7})) 
//     .then(() => {
//       dispatch(updateLoading(false))
//     })
    
// },[dispatch,playlistId]);

useEffect(() => {
  let mounted = true;
  if(mounted){
 //if(courseStatus === 'idle'){
    dispatch(fetchAsyncCategories(playlistId)) 
 //}
}
  return () => {
    mounted = false;
    //dispatch(updateStatus('idle'))
  }
},[dispatch,playlistId]);


const titleFunc = () => { 
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
}


  switch(playlistId){
    case 'PLEu7Y7_blvLXlM820Uy30N8ay-eoZVyIK': 
    case 'PLEu7Y7_blvLVwibRK9szNWmTios4OsLF2':
    case 'PLEu7Y7_blvLVNfrsztZmfWEw57lWyuUfI':
    case 'PLEu7Y7_blvLVVwb0lGCk9J1E4mJcDO808':
    return (
      <div>
        <Layout>
        <div className = "eachCategoryList center_div">
            <div>
              <TopCourses
              topCourses = {topCourses}
              titleFunc = {titleFunc()}
              />
            </div>
          <hr/>
          <div> 
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
        </div>
        </Layout>		
      </div>
    )
  }

  return (
    <PageNotFound/>
  )

  


	
}

// const deepText = {
// 	fontWeight : "700"
// }

export default CategoryListPage
