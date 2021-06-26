import React from 'react'
import { Stack, Skeleton} from "@chakra-ui/react"

const  review = () => {
    return (
            <div className = "review-div">
				  <div className ="review-heading">
          <div className = "skeleton">
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          </div>
          
						<div className = "search-review">
							<input type = "search" placeholder = "search-reviews"></input>
						</div>
						<div className = "filter-review">
								<select>
									<option>MOST RECENT</option>
									<option>Highest-Rated</option>
								</select>
						</div>
					</div>
					<div className = "review-body">
             <p>REVIEW-BODY(with avatar, ratings, names and time)</p>
					</div>  
				</div>
    )
}

export default review
