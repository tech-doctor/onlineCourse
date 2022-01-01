import React, {useState,useEffect} from 'react'
import { Box, SkeletonText, SkeletonCircle} from "@chakra-ui/react"
import api from '../../Component/Apis/api';
import { apiKey } from '../../Component/Apis/apiKey';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const  Review = () => {
   const {id} = useParams();
  const [reviews, setReviews] = useState([]);
 
  const fetchCountries = async ()=> {
    const response = await api.get(`/commentThreads?part=snippet&part=id&part=replies&maxResults=5&videoId=${id}&key=${apiKey}`);
    console.log(response.data.items)
    setReviews(response.data.items)  
  }


  useEffect(() => {
    
    fetchCountries(); 
  }, [id]);
   

const LoadingText = function courseBox (){
  //if (reviews.length === 0) {
    return (
      <div className = "skeletonBox">
        <div style={{display: ''}} className =' each'>
          <SkeletonCircle size="12" mt="4" />
          <SkeletonText mt="2" noOfLines={2} spacing="4" />    
        </div>
        <div className =' each'>
          <SkeletonCircle size="12" mt="4" />
          <SkeletonText mt="2" noOfLines={2} spacing="4" />    
        </div>
        <div className =' each'>
          <SkeletonCircle size="12" mt="4" />
          <SkeletonText mt="2" noOfLines={2} spacing="4" />    
        </div>  
    </div>
    );
  //}

}
    

  return (
    <div className = "review-div">
      <div className ="review-heading">
        <div className = "search-review">
          <input type = "search" placeholder = "search-reviews.."></input>
        </div>
        <div className = "filter-review">
          <select>
            <option>MOST RECENT</option>
            <option>Highest-Rated</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <Box padding="6" boxShadow="lg" bg="white">
            {reviews.length === 0? <LoadingText/> :
            <div>
              {reviews?.map((data, index) => 
              (<div key = {index}>
                <div className = "review-body">
                  <div className ="left">
                    <div className = "avatar">
                      <img alt = {data.snippet.topLevelComment.snippet.authorDisplayName} src = {data.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                    </div>
                  </div>
                  <div className = "right">
                    <div style = {{fontWeight: '700'}} className ="name-time">
                      <span> {data.snippet.topLevelComment.snippet.authorDisplayName} <span style = {{fontWeight: '400', fontSize:  '13px'}} > {moment(data.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></span>     
                    </div>
                    <div className = "comments">
                      {data.snippet.topLevelComment.snippet.textOriginal}
                    </div>
                  </div> 
                </div>
              </div> ))} 
            </div> } 
          </Box>
        </div>
      </div>
    </div>
    )
}

export default Review
