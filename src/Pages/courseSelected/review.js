import React from 'react'
import { Stack, Skeleton, Box, SkeletonText, SkeletonCircle} from "@chakra-ui/react"

const  review = () => {
  const EachReview = () => {
    return(
      <div className = "review-body">
        <div className ="left">
          <div className = "avatar">
            <img alt = "pics" src = "../Assets/instructor.jpg"/>
          </div>
        </div>
        <div className = "right">
          <div style = {{fontWeight: '700'}} className ="name">
            Oluka Isaac
          </div>
          <div className = "comments">
            Nice video, i will like to get more of this some other time
          </div>
        </div>  
      </div>  
    )
  }

  return (
    <div className = "review-div">
      <div className = "skeleton">
        {/* <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack> */}
        <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="12" />
        <SkeletonText mt="4" noOfLines={3} spacing="4" />
      </Box>
      </div>
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
        <EachReview/>
        <hr/>
        <EachReview/>
        <hr/>
        <EachReview/>
        <hr/>
        <EachReview/>
        <hr/>
     
    </div>
    )
}

export default review
