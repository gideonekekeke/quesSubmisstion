import React, {useState} from 'react'
import styled from 'styled-components'
import pic from './img/log.png'
import pic2 from './img/bg2.png'


const InovatorsQuest = () => {
   
  return (
    <Container>
    <LogoHold src = {pic}/>
    <h3> inovators Questions</h3>
    <p>Please make sure you complete all the steps by fillng all fields correctly</p>
     <InputForm>
        <Title>What is Html and css</Title>
              <Hold>
                  <span>*</span><h6>field is required</h6>
                  <input />
        </Hold>
     </InputForm>
    
      </Container>
  )
}

export default InovatorsQuest

const InputForm = styled.div`
display : flex;
flex-direction : column;


input{
  height : 40px;
  width : 80%;
  border : 1px solid silver;
  outline : none;
  /* background : black */
}
`
const Title = styled.div``
const Hold = styled.div`
display : flex;
flex-direction : column;

`


const LogoHold = styled.img`
height : 50px;
width :200px;
object-fit: contain;
background-color: silver;
border-radius : 20px;
color : black;

`

const Container = styled.div`
display : flex;
/* justify-content : center; */
align-items : center;
margin-top : 100px;
flex-direction: column;

/* background-image : url(${pic2}); */
height : 100vh;
width : 100%;
object-fit: contain;

&.after{
    content : 'xdthfdzjk';
    height : 50px;
    width : 50px;
    background : black
}
`



