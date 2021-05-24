import React from 'react'

const AllCategories = () => {

   const AllCategory = function allCategories() {
     return (
     <div style = {{marginBottom: '20px'}} className = "allCoursesDisplay" >
          <div className = "left">
            <div className = "image"> 
              <img  alt = "" src = "https://www.valuecoders.com/blog/wp-content/uploads/2020/06/10-reasons-to-use-reactjs-for-enterprise-app-development-1024x614.jpg"/>
            </div>
            <div className = "about">
              <p>About</p>
            </div>
          </div>
          <div className = "right">
            <div className = "price-tag">
              <p>Price</p>
            </div>
          </div>   
        </div>
     )
   }

    return (
      <div className = "allCategory">
        <div style = {{display: 'flex', justifyContent: 'space-between',
        alignItems:'center' }} className = "title-filter">
          <div className ="title">
            <p style = {{ fontSize: '25px'}}>All JS Courses</p>
          </div>
            <div style = {{}} className ="filter">
              <select style = {{cursor: 'pointer' }}>
                <option>Filter</option>
                <option>Latest</option>
                <option>Most Rated</option>
              </select>
            </div>  	 
        </div>
        <AllCategory/>
        <AllCategory/>
        <AllCategory/>
        <AllCategory/>
        <AllCategory/>
        <AllCategory/>  
      </div>
    )
}

export default AllCategories
