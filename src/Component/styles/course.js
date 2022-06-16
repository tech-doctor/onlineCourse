import styled from "styled-components"

export const  Article = styled.article`
  display:flex;
  justify-content:space-between;
  margin: 1.5em 0;
  height:100%;
  .left{
    width:40%;
    margin:auto 0;
    img{
        width:100%;
        height:auto;
    }
  }
  .right{
   display:flex;
   flex-direction:column;
   justify-content:space-between; 
   .title{
    font-size:1.2rem;
    font-weight:bold;
   }  
  }
  @media (max-width: 850px) { 
    margin:15px 0;
    .right{
        margin-left:20px;
              
    } 
  }
 @media (max-width: 500px) {
    flex-wrap:wrap;
    .right{
      margin-left:0px;
      margin-bottom:10px;  
      .title{
        font-size:1rem;
        font-weight:600;
      }  
      .details, .price{
        font-size:0.9rem;
      } 
    }  
  }
`