import styled from "styled-components"

export const  LogoStyle = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  @media (max-width: 850px) {
  font-size: 1rem;
}
 @media (max-width: 600px) {
  font-size: 0.9rem;
}
`

export const ImgStyle = styled.img`
   width: 50px;
  height: 50px;
  @media (max-width: 850px) {
    width: 45px;
    height: 45px;
  }
  @media (max-width: 500px) {
    width: 39px;
    height: 39px;
  }
`

export const Select = styled.select` 
  border:none;
  outline:none;
  color: #02897A;
  backgroundColor: #fff;
  fontSize: 13px;
  fontWeight: bold;
  fontFamily: 'Poppins';
  @media (max-width: 850px) {
    fontSize: 11px;
  }
 `

 export const Style = styled.div`
  padding: 5px 20px;
  background-color: #fff;
  width: fit-Content;
  border-radius: 2px;
  @media (max-width: 850px) {
    fontSize: 11px;
    padding: 2px 10px;
  }
 `