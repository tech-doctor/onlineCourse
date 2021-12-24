import React from 'react'
import { Box, SkeletonText, SkeletonCircle} from "@chakra-ui/react"

const  review = () => {
  const reviews = [
    {
    avatar: '../Assets/instructor.jpg',
    name: 'Oluka Isaac',
    comment: ' Nice video, i will like to get more of this some other time'
  },
  {
    avatar: '../Assets/instructor.jpg',
    name: 'Oluka Isaac',
    comment: ' Nice video, i will like to get more of this some other time'
  },
  {
    avatar: '../Assets/instructor.jpg',
    name: 'Oluka Isaac',
    comment: ' Nice video, i will like to get more of this some other time'
  },
  {
    avatar: '../Assets/instructor.jpg',
    name: 'Oluka Isaac',
    comment: ' Nice video, i will like to get more of this some other time'
  }
]


  return (
    <div className = "review-div">
      <div className = "skeleton">
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
      <div>
      {reviews.map((data, index) => 
        (
        <div key={index}>
          <div className = "review-body">
            <div className ="left">
              <div className = "avatar">
                <img alt = "pics" src = {data.avatar}/>
              </div>
            </div>
            <div className = "right">
              <div style = {{fontWeight: '700'}} className ="name">
                {data.name}
              </div>
              <div className = "comments">
                {data.comment}
              </div>
            </div> 
          </div>
          <hr/>
        </div>))}
      </div>
    </div>
    )
}

export default review
