import styled from "styled-components";


 export const FilterBlock = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5em 0;
    height:100%;
    .filter{
      select{
        cursor: pointer;
        background-color: #02897A;
        color: white;
        border: none;
        outline: none;
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Poppins';
        padding: 0.3em 1.5em;
        border-radius: 50px;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
        
        @media (max-width: 850px) {
          font-size: 0.9rem;
          text-align: center;
          padding: 0.3em 1em;
        }
        margin-left: 1em;
      }
      
      input{
        border: 1px solid #D9D9D9;
        outline: none;
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Poppins';
        padding: 0.3em 1em;
        border-radius: 50px;
        background-color: #D9D9D9;
        
        ::placeholder{
          color: #B2B5BB;
        }
        @media (max-width: 850px) {
          font-size: 0.9rem;
          padding: 0.2em 0.1em 0.2em 1em;
        }
      }
      .input{
        position: relative;
      }
      img{
        width: 18px;
        height: 18px;
        position: absolute;
        right: 0;
        top: 0.1em;
        right: 0.7em;
        z-index: 1;
      }
    }
    
    @media (max-width: 500px) {
      flex-wrap:wrap;
      .title{
        width:100%;
      }
      .filter{
        margin-top:10px;
        width:100%;
        input{
          width:60%;
        }
        select{
          width:30%;
          margin-left:10%;
        }
      }
      
    }
    .title{
      font-size:1.5rem;
      font-weight:600;
      color: #22343D;
      font-family: 'Poppins';
     @media (max-width: 1200px) {
      font-size:1.4rem;
     }
     @media (max-width: 850px) {
      font-size:1.2rem;
     }
     @media (max-width: 500px) {
      font-size:1.1rem;
     }
    }
`



{/* <div className = "title-filter">
        <div className ="title">
          <p>{heading}</p>
        </div>
        <div className ="filter">
          <input type="text" placeholder="Search"/>
          <select style = {{cursor: 'pointer' }}>
            <option>Most Rated</option>
            <option>Latest</option>
          </select>
        </div>  	 
      </div> */}