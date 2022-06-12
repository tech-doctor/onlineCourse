import React, {useEffect} from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer'
import '../../Styles/categoryListPage.scss'
import AllCategories from './allCategories'
import { Stack,Skeleton} from "@chakra-ui/react"
import Author from './author'
import TopCourses from './topCourses'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchAsyncCategories, getSelectedCategory } from '../../Store/courseSlice'
import PageNotFound from '../pageNotFound'


const  CategoryListPage = ()  => {
  const topCourses = useSelector(getSelectedCategory);
  
  const loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  const dispatch = useDispatch();
  const {playlistId} = useParams();

  useEffect(() => {
    dispatch(fetchAsyncCategories(playlistId))    
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
        <div>
          <Header/>
        </div>
        <div style = {{margin: "0 3%"}} className = "eachCategoryList">
          <div>
            <Author/>
          </div>
          <hr/>
            <div>
              <TopCourses
              topCourses = {topCourses}
              loading= {loading}
              titleFunc = {titleFunc()}
              />
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
            loading= {loading}
            titleFunc = {titleFunc()}
            />} 
          </div>
        </div>
        <div>
          <Footer/>
        </div>		
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
