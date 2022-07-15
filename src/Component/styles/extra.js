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
          font-size: 0.8rem;
          padding: 0.5em 0.6em 0.2em 1.1em;
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

 export const  AccountSection = styled.section`
  display: flex;
  align-items: center;
  padding: 0.5em 0.6em;
  border-bottom: #DCDCDC 1px solid;
  .email-name{
    margin-left: 10px;
    .name{
      font-weight: 700;
      font-size: 17px;
    }
    .email{
      font-size: 14px;
    }
  }
 `

export  const Login = styled.button`
   color: #007568;
    font-size: 0.9rem;
    background-color: white;
    border: 1px solid #007568;
    border-radius: 3px;
    padding: 0.4em 1.3em;
    font-weight: 600;
    &:hover{
      background-color: #edf2f2;
      
    }
`

export  const Register = styled.button`
   background-color: #007568;
   color: white;
    font-size: 0.9rem;
    border:none;
    border-radius: 3px;
    padding: 0.43em 1.3em;
    margin: 0.5em 0;
    font-weight: 500;
    &:hover{
      background-color: #096359;
`