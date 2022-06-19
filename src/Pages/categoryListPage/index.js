import React, {useEffect} from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer'
import '../../Styles/categoryListPage.scss'
import AllCategories from './allCategories'
import { Stack,Skeleton} from "@chakra-ui/react"
import TopCourses from './topCourses'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchAsyncCategories, getSelectedCategory, updateLoading } from '../../Store/courseSlice'
import PageNotFound from '../pageNotFound'
import Layout from '../../Component/Layout'

const  CategoryListPage = ()  => {
  const topCourses = useSelector(getSelectedCategory);
  const loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  //const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const {playlistId} = useParams();

  useEffect(() => {
    dispatch(updateLoading(true))
    //setLoading(true)
    dispatch(fetchAsyncCategories(playlistId)) 
    .then(() => {
      // setLoading(false)
      dispatch(updateLoading(false))
    })
    
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


//center_div
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
              titleFunc = {titleFunc()}
              />
            </div>
          <hr/>
          <div> 
            {loading?    
              <Stack>
                <Skeleton height="100px" />
                <Skeleton height="100px" />
                <Skeleton height="100px" />
                <Skeleton height="100px" />
              </Stack> :
            <AllCategories
            titleFunc = {titleFunc()}
            />}  
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
