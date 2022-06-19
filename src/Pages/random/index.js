import React, {useEffect} from 'react';
import Header from '../../Component/Header/desktopHeader/Header';
import Footer from '../../Component/Footer';
import '../../Styles/categoryListPage.scss';
//import AllCategories from './allCategories'
import AllCategories from '../categoryListPage/allCategories';
import { Stack,Skeleton} from "@chakra-ui/react"
import { fetchAsyncCourses, getAllcourses } from '../../Store/courseSlice';
import TopCourses from '../categoryListPage/topCourses';
import { useDispatch, useSelector } from 'react-redux';


const  Random = ()  => {
  const topCourses = useSelector(getAllcourses);
  const loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAsyncCourses())    
},[dispatch]);


// const titleFunc = () => { 
//   switch (playlistId) {
//     case 'PLEu7Y7_blvLXlM820Uy30N8ay-eoZVyIK': 
//       return('HTML');
//     case 'PLEu7Y7_blvLVwibRK9szNWmTios4OsLF2':
//       return( 'CSS' );
//     case 'PLEu7Y7_blvLVNfrsztZmfWEw57lWyuUfI':
//       return( 'Javascript' );
//       case 'PLEu7Y7_blvLVVwb0lGCk9J1E4mJcDO808':
//       return( 'JQuery' );
//     default:
//       return( 'Random' );
//   }
// }


	return (
		<div>
		  <div>
			  <Header/>
			</div>
			<div style = {{margin: "0 3%"}} className = "eachCategoryList">
        <hr/>
			    <div>
            <TopCourses
            topCourses = {topCourses}
            loading= {loading}
            titleFunc = {"Random"}
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
