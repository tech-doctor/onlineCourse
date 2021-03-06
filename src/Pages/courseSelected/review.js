import React, {useState,useEffect, useCallback} from 'react'
import { SkeletonText, SkeletonCircle} from "@chakra-ui/react";
import api from '../../Component/Apis/api';
import { apiKey } from '../../Component/Apis/apiKey';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Filter from '../../Component/Filter';

const  Review = () => {
  const {id} = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('');
 
  

  useEffect(() => {
    let mounted = true;
    if(mounted){
    const  fetchReviews =  async() => {
      setLoading(true)
      const response = await api.get(`/commentThreads?part=snippet&part=id&part=replies&maxResults=5&videoId=${id}&key=${apiKey}`);
      setReviews(response.data.items)  
      setLoading(false)
    }
    fetchReviews();
  }
  return () => {
    mounted = false;
  }
  },[id]);
   

const LoadingText = function courseBox (){
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
}

const handleSearch = useCallback((e) => {
  setSearchItem(e.target.value);
},[]);

const reviewData = reviews?.filter((value) => {
  if(searchItem === ''){ 
    return value;
  }
 else if(value.snippet.topLevelComment.snippet.authorDisplayName.toLowerCase().includes(searchItem.toLowerCase())){
    return value;
  }
});


  return (
    <div className = "review-div">
      {loading? <LoadingText/> :
      <>
        {!loading && reviews.length === 0 ? <div style={{textAlign: 'center', padding: '5em 0em', backgroundColor: 'grey'}}>No Reviews...</div>:
        <>
          <Filter
            handleSearch = {handleSearch}
            heading = {`Reviews`}
          />
            {reviewData.map((data, index) => 
            (<React.Fragment key = {index}>
              <div className = "review-body">
                <div className = "avatar left">
                  <img 
                  alt = {data.snippet.topLevelComment.snippet.authorDisplayName} 
                  src = {data.snippet.topLevelComment.snippet.authorProfileImageUrl}
                  onError = {(e) => {e.target.src = 'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg'}}
                  />
                </div>
                <div className = "right">
                  <div style = {{fontWeight: '700'}} className ="name-time">
                    <span style={{color:'#22343D'}}> {data.snippet.topLevelComment.snippet.authorDisplayName} <span style = {{fontWeight: '400', fontSize:  '13px', color: '#074942'}} > {moment(data.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></span>     
                  </div>
                  <div className = "comments">
                    {data.snippet.topLevelComment.snippet.textOriginal}
                  </div>
                </div> 
              </div>
            </React.Fragment> ))}   
        </>}
      </>}
    </div>
  )
}

export default React.memo(Review);
