import styled from "styled-components"

export const  Article = styled.article`
  display:flex;
  justify-content:space-between;
  margin: 1.5em 0;
  height:100%;
  .left{
    width:40%;
    height:100%;
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
    color: #22343D;
   }  
   .details{
    color: #667085;
   }
   .price{
    color: #074942;
   }
  }
  @media (max-width: 850px) { 
    margin:15px 0;
    .right{
        margin-left:20px;
              
    } 
  }
 @media (max-width: 500px) {
    .right{ 
      .title{
        font-size:1rem;
        font-weight:600;
       
      }  
      .details, .price{
        font-size:0.9rem;
      } 
    }  
  }

  @media (max-width: 300px) {
    flex-wrap:wrap;
    .right{
      margin-left:0px;
      margin-bottom:10px;  
      
    }  
  }
`


 export const CardItem = styled.div` 
   background-color: white;
    width:320px;
    height:auto;
    position:relative;
    font-family: 'poppins';
    display: inline-block;
    margin: 12px 5px;
    box-shadow: 0px 0.5px 5px rgb(69.1%, 69.1%, 69.1%);
    border-radius: 3px;
    @media (max-width: 850px) { 
      width:200px;
    }
    .button{
      width:100%;
      button{
        width:100%;
        position:absolute;
        bottom:0;
        padding:10px;
        border-radius:0px 0px 3px 3px;
        cursor:pointer;
        background-color: white;
        color:#02897A;
        font-size:1.1rem;
        border:none;
        outline:none;
        font-family: 'poppins';
        font-weight:bold;
        &:hover{
          background-color: rgb(87.4%, 87.4%, 87.4%); 
        }
        @media (max-width: 850px) {
          font-size:0.9rem;
        }
      }
    } 
    :hover{
      transform: scale(1.04);
      transition: all 0.3s;
      margin: 12px 10px;
    }
    .overlay{
      background-color: rgb(0, 0, 0);
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.85; 
      border-radius: 3px; 
    }
    .card-inner{
      .card-top{
      width:320px;
      @media (max-width: 850px) { 
        width:200px;
      }
      img{
        border-radius: 3px 3px 0px 0px;
        width:100%;
      }
    }
      .card-bottom{
        padding: 0 10px;
        @media (max-width: 850px) { 
          font-size:0.8rem;
        }
        .title{
          margin: 7px 0;
          font-size: 1rem;
          font-weight:600;
          @media (max-width: 850px) { 
            font-size:0.9rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .date{
          color: #606060
        }
        
        .best-selling{
          position: absolute;
          top: 0px;
          padding: 5px 7px;
          right:0px;
          font-size: 0.8rem;
          border-radius: 0px 3px 0 0;
          background-color: #074942;
          color: white;
          font-weight: 500;
        }
        .price{
          margin: 10px 0;
          padding: 10px 0;
        }
        .new_price{
          background-color: #F03E3D;
          color: white;
          padding: 0.2em 1.2em;
          margin-right: 0.5em;
          border-radius: 3px;
         
        }
      }
    }
`

export const CourseSection = styled.section`
    margin: 5em 0 7em 0;
    @media (max-width: 1200px) {
      margin: 3em 0 5em 0;
    }
    @media (max-width: 1200px) {
      margin: 3em 0 4em 0;
    }

`

export const  SliderContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  .slider{
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width:none;
    scroll-behavior: smooth;
  }
  @media (min-width: 850px) {
     .slider::-webkit-scrollbar {
        display: none;
     }
  }
  .angle{
    z-index: 1;
    padding: 0.08em;
    color:#02897A;
    text-align:center;
    background-color:white;
    border-radius: 50%;
    cursor:pointer;
    @media (max-width: 850px) { 
     display:none;
    }
    :hover{
      background-color: #02897A;
      color:white;
    }
  }

  .angle_left{
    position: absolute;
    left: 0;
    margin-left: -12px;
  }
  .angle_right{
    position: absolute;
    right: 0;
    margin-right: -12px;
  }
`


export const Heading = styled.div`
  text-align: center;
  .sub_heading{
    font-size: 1.2rem;
    letter-spacing: 0.002rem;
    margin: 1em 0;
    color: #22343D;
    @media (max-width: 1200px) {
      font-size: 1.05rem;
      margin: 0.8em 0;
    }
    @media (max-width: 850px) {
      font-size: 1rem;
      margin:0.5em 0;
    }
    @media (max-width: 500px) {
      font-size: 0.95rem;
     
    }
  }
.fancy {
  line-height: 0.5;
  font-size: 28px;
  font-weight: bold;
  color: #22343D;
  margin: 0.5em 0;
  @media (max-width: 1200px) {
    font-size: 25px;

  }
  @media (max-width: 850px) {
    font-weight: 600;
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
}
.fancy span {
  display: inline-block;
  position: relative;  
}
.fancy span:before,
.fancy span:after {
  content: "";
  position: absolute;
  height: 5px;
  border-bottom: 1px solid #606060;
  top: 0;
  width: 150%;
  @media (max-width: 850px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 40%;
  }
  @media (max-width: 350px) {
    width: 30%;
  }
}
.fancy span:before {
  right: 100%;
  margin-right: 15px;
}
.fancy span:after {
  left: 100%;
  margin-left: 15px;
}
`
