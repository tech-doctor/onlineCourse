import React from 'react';
import CourseList from '../../Component/courseList';

const  Recommended = () => {
  const recommendedData = [
 {
      id: 1,
      title: 'Javascript for Beginners',
      image: '/Assets/Javascript.png',
      price: '$10',
    },
    {
      id: 2,
      title: 'Javascript for Beginners',
      image: '/Assets/Javascript.png',
      price: '$10',
    },
    {
      id: 3,
      title: 'Javascript for Beginners',
      image: '/Assets/Javascript.png',
      price: '$10',
    },
    {
      id: 4,
      title: 'Javascript for Beginners',
      image: '/Assets/Javascript.png',
      price: '$10',
    },
    {
      id: 5,
      title: 'Javascript for Beginners',
      image: '/Assets/Javascript.png',
      price: '$10',
    },
    {
      id: 6,
      title: 'Javascript for Beginners',
      image: '/Assets/Javascript.png',
      price: '$10',
    },
  ]
  const firstThreeData = recommendedData.slice(0, 3);
  const lastThreeData = recommendedData.slice(3, 6);
  return (
    <section className='recommended_section'>
      <p className='recommended_heading'>Recommended</p>
      <div className='recommended'>
      <div className='left'>
        {firstThreeData.map(data => (
          <CourseList
            key={data.id}
            title={data.title}
            image={data.image}
            bestSelling={data.bestSelling}
            price={data.price}
          />
         ))}
      </div>
      <div className='right'>
        {lastThreeData.map(data => (
          <CourseList
          key={data.id}
          title={data.title}
          image={data.image}
          bestSelling={data.bestSelling}
          price={data.price}
          />
        ))}
        </div>
      </div>
    </section>
  );
}

export default Recommended;