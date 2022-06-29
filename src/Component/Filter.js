import React from 'react';
import { FilterBlock } from './styles/extra';

const Filter = ({heading, handleSearch}) => {

  return (
    <FilterBlock className = "title-filter">
        <div className ="title">
          <p>{heading}</p>
        </div>
        <div className ="filter">
          <span className='input'>
          <input 
          onChange={handleSearch}
          type="text" 
          placeholder="Search"/>
          <img src={'/Assets/search.png'} alt='search'/>
          </span>
          <span className='select'>
            <select style = {{cursor: 'pointer' }}>
              <option>Most Rated</option>
              <option>Latest</option>
            </select>
          </span>
         
        </div>  	 
    </FilterBlock>
  );
};

export default React.memo(Filter);