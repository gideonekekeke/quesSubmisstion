import React, {useState} from 'react'
import styled from 'styled-components'
import pic from './img/log.png'
import pic2 from './img/bg2.png'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import axios from 'axios';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const InovatorsQuest = () => {
const hist = useNavigate()
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [dateTime, setDateTime] = React.useState('')
  const [tech, setTech] = React.useState('')
  const [migrate, setMigrate] = React.useState('')
  const [Url, setUrl] = React.useState('')
  const [Challenge, setChallenge] = React.useState('')
  const [BChallenge, setBChallenge] = React.useState('')


  const postData = async(e)=>{

    e.preventDefault()
 const res = await axios.post('http://localhost:8060/api/inovators/form', {title, description,dateTime,tech,migrate,Url,Challenge,BChallenge })
 .then((res)=>{

    //   localStorage.setItem("userInfo", JSON.stringify(data.data))
    // myNavigation("/chat")
    
        swal({
            title: "Submitted Successfully!",
            text: "You can clicked the button!",
            icon: "success",
            button: "ok",
        
          }).then((value) => {
            swal(hist('/dashboard'));
          });
  

        
})

  }
   
  return (
    <Container>
    <LogoHold src = {pic}/>
    <h3> inovators Questions</h3>
    <p>Please make sure you complete all the steps by fillng all fields correctly</p>
    <br/>
     <InputForm>
       
              <Hold>
                 <Title>1 .Title of Inovation</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <input
                  onChange={(e)=>{
                    setTitle(e.target.value)
                  }}
                  required = {true} placeholder='Title of Inovation'/>
        </Hold>
     </InputForm>
     <InputForm>
       
              <Hold>
                 <Title>2 .Brief description about your Inovation</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <input 
                   onChange={(e)=>{
                    setDescription(e.target.value)
                  }}
                  required = {true}
                  placeholder='Brief description about Inovation' />
        </Hold>
     </InputForm>
     <InputForm>
       
              <Hold>
                 <Title>3 .Start and End-Date</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <input 
                   onChange={(e)=>{
                    setDateTime(e.target.value)
                  }}
                  required = {true}
                  placeholder='format(25-03-2022 - 20-05-2027)' />
        </Hold>
     </InputForm>
     <InputForm>
       
              <Hold>
                 <Title>4 .What Tecchnology used?</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <input
                   onChange={(e)=>{
                    setTech(e.target.value)
                  }}
                  required = {true}
                  placeholder='What Tecchnology used?' />
        </Hold>
     </InputForm>
     <InputForm>
       
              <Hold>
                 <Title>5 .Have you migrated?</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <input
                   onChange={(e)=>{
                    setMigrate(e.target.value)
                  }}
                  required = {true}
                  placeholder='YES / NO' />
                     <FormControl >
      <FormLabel id="demo-row-radio-buttons-group-label">Progress</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="0-25" control={<Radio />} label="0-25" />
        <FormControlLabel value="50-75" control={<Radio />} label="50-75" />
        <FormControlLabel value="75-100" control={<Radio />} label="75-100" />
      
      </RadioGroup>
    </FormControl>
        </Hold>
     </InputForm>
        <InputForm>
       
              <Hold>
                 <Title>6 .Production or Staging Url</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <input
                   onChange={(e)=>{
                    setUrl(e.target.value)
                  }}
                  required = {true}
                  placeholder='e.g https://myproductionurl.com.ng' />
        </Hold>
     </InputForm>
        <InputForm>
       
              <Hold>
                 <Title>7 .Any challenges in refference to Technology?</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <input
                   onChange={(e)=>{
                    setChallenge(e.target.value)
                  }}
                  required = {true}
                  placeholder ='Any challenges in refference to Technology' />
        </Hold>
     </InputForm>
        <InputForm>
       
              <Hold>
                 <Title>8 .Any challenges in refference to BDM?</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <input 
                   onChange={(e)=>{
                    setBChallenge(e.target.value)
                  }}
                  required = {true}
                  placeholder='Any challenges in refference to BDM?' />
        </Hold>
     </InputForm>
       <button onClick = {postData}>Submit</button>
      </Container>
  )
}

export default InovatorsQuest;

const InputForm = styled.div`
display : flex;
flex-direction : column;
width: 60%;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 15px;


input{
  height : 35px;
  width : 100%;
  border : 1px solid silver;
  outline : none;
  transition : all 350ms;
 font-size : 13px;
 padding-left : 10px;

  ::placeholder{
    font-size : 13px;
    color : silver;
    /* padding-left : 10px */
  }
  /* background : black */


  :hover{
    border-color : #00acee
  }
}
`
const Title = styled.div`
padding-bottom :5px
`
const Hold = styled.div`
display : flex;
flex-direction : column;
/* background-color: red; */
width :80%;
color : black;
font-weight: bold;


span{
  justify-content: flex-start;
  color : red
}

h6{
  font-size : 12px;
  margin-left : 10px
}

`


const LogoHold = styled.img`
height : 50px;
width :200px;
object-fit: contain;
background-color: silver;
border-radius : 20px;
color : black;
margin-top : 30px

`

const Container = styled.div`
display : flex;
justify-content : center;
align-items : center;
/* margin-top : 100px; */
flex-direction: column;
/* position: fixed; */

/* background-image : url(${pic2}); */
height : 100%;
width : 100%;
object-fit: contain;
background-color : white;
padding-bottom : 50px;

&:after{
    content : '';
    height : 300px;
    width : 300px;
    /* background : red; */
    position: absolute;
    top : -50;
    /* left : 0; */
    right: 0;
    bottom: -50;
    background-image : url(${pic2});
    background-repeat : no-repeat;
    background-position :center;
    object-fit: contain;
    background-size : cover;
     animation: bounce 10s;
            animation-direction: alternate;
            animation-timing-function: cubic-bezier(.7, 0.07, 1, .7);
            animation-iteration-count: infinite;

            @media only screen  and (max-width : 700px){
              background-image : none;
            }
        
          
        @keyframes bounce {
            from {
                transform: translate3d(0, 0, 0);
            }
            to {
                transform: translate3d(0, 60px, 0);
            }
        }
       -webkit-animation-name: bounce;
            -webkit-animation-duration: 10s;
            -webkit-animation-direction: alternate;
            -webkit-animation-timing-function: cubic-bezier(
            .5, 0.05, 1, .5);
            -webkit-animation-iteration-count: infinite;

       @-webkit-keyframes bounce {
            from {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
            to {
                -webkit-transform: translate3d(0, 200px, 0);
                transform: translate3d(0, 200px, 0);
            }
        }
    
}


button{
  width : 48%;
border : none;
height : 40px;
background-color: #ec4214;
color : white
}
`



