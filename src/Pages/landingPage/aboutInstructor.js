import React from 'react'

const aboutInstructor = () => {
	return (
		<div className = "instructor-div">
      <div className = "instructor-image">
				<img width={'280px'} height = {'250px'} alt = "" src = "https://yt3.ggpht.com/dLdgCaEVgttRqGV4nbcO9VJyc27YgP0sUIqySVWbRvmcwMofNM0NTkywg_ssjf_Po3w0UVA1ig=s176-c-k-c0x00ffffff-no-rj-mo"
				onError = {(e) => {e.target.src = 'https://via.placeholder.com/320x180?text=No+Image+Found'}}
				/>
			</div>
			<div className = "about-instructor">
				<div className='heading'>
          <h3>About the instructor</h3>
        </div>
				<div className = "instructor-details">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum dictum nec orci magna urna. Non facilisis tincidunt id pulvinar odio. Nisi commodo pharetra magna ut in. Massa et mi ornare massa vel tellus id fermentum, sit. At ullamcorper nullam.</p>
				</div>
        <div className='button'>
        <button>Contact</button>
        </div>
			</div>
		</div>
	)
}

export default aboutInstructor
