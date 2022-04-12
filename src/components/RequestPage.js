import React, { useContext } from 'react'
import Leftbar from './Leftbar'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Avatar,
} from "@material-ui/core";
import { GlobalContext } from '../Global/AuthContext';
import axios from 'axios';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import MessageReq from './MessageReq';
import UserProfile from './UserProfile';
const RequestPage = ()=>{
  const {current} = useContext(GlobalContext)

  const [data, setData] = React.useState([])
   const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
   const [mes, setMes] = React.useState('')

  const fetchRequest = async()=>{
    const res = await axios.get("http://localhost:8060/api/bdm/request")

    console.log('object res', res.data);
    setData(res.data)
  }

  let user  = {
    title,
    description,
    userId : current._id
  }

  const hist = useNavigate()
    const postData = async(e)=>{

    e.preventDefault()
 const res = await axios.post('http://localhost:8060/api/bdm/request', user )
 .then((res)=>{
    console.log(res?.data?.data)

        // localStorage.setItem("inovator", JSON.stringify(res?.data?.data))
    // myNavigation("/chat")
        swal({
            title: " Successfully!",
            text: "You can clicked the button!",
            icon: "success",
            button: "ok",
        
          }).then((value) => {
            swal(hist(window.location.reload()));
          });
  
})
    }
    const postMessage = async(e)=>{

    e.preventDefault()
 const res = await axios.post('http://localhost:8060/api/bdm/request', user )
 .then((res)=>{
    console.log(res?.data?.data)

        // localStorage.setItem("inovator", JSON.stringify(res?.data?.data))
    // myNavigation("/chat")
        swal({
            title: " Successfully!",
            text: "You can clicked the button!",
            icon: "success",
            button: "ok",
        
          }).then((value) => {
            swal(hist(window.location.reload()));
          });
  
})
    }



// const [expanded, setExpanded] = React.useState(false);

//   const handleChange = ()=>{
//    setExpanded(!expanded)
//     };


      const castVote = async (id) => {
    const url = "http://localhost:8060/api/bdm/request";

    const messages = {
      who: current?._id,
      mes
    };

    await axios.post(`${url}/${id}`, messages);
  };





 React.useEffect(()=>{
   fetchRequest()
 },[])
    return (
        <Container>
          {
            current.isAdmin? null : <div>    <h2>Submit Requests Here!</h2>
            <br/>
             <InputForm>
       
              <Hold>
                 <Title>Title of Requests</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <input 
                  onChange={(e)=>{
                    setTitle(e.target.value)
                  }}
                  placeholder='Title of report' />
        </Hold>
     </InputForm>
           
       
     <InputForm>
       
              <Hold>
                 <Title>Description</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <textarea
                    onChange={(e)=>{
                    setDescription(e.target.value)
                  }}
                  placeholder='Description' />
        </Hold>
     </InputForm>
  
  
     <InputForm>
       
              <Hold>
        <button
        onClick = {postData}
        >Submit</button>
           
        </Hold>
     </InputForm></div>
          }
     <br/>
     <br/>
     <h6>All Requests</h6>
      <div>
       {
         current?.isAdmin ? <>
            {
          data?.map((props)=>(
             <Accordion style={{width : '90%', marginLeft : '60px'}}  onChange={('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <UserProfile rep id = {props?.userId} />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            11/04/2021
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{props?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {props?.description}
          </Typography>
          <br/>
           {
              props?.chat?.map((row)=>(
                   <div style = {{display : 'flex', alignItems : 'center'}}>
                    <Avatar
            alt="Remy Sharp"
          />
          <div style={{marginLeft : '10px'}}>
            <UserProfile raw id = {row?.who}/>
            <div>{row?.mes}</div>
          </div>
            </div>
              ))
            }
           <InputForm>
       
              <Hold>
           
                 <MessageReq id = {props._id}/>
        </Hold>
     </InputForm>
        </AccordionDetails>
      </Accordion>
          ))
        }
         </> : null
       }
     
       {
         current?.bdm ? <>
            {
          data?.map((props)=>(
         <>
         {
           props?.userId === current?._id ? 
           <>
              <Accordion style={{width : '90%', marginLeft : '60px'}}  onChange={('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <UserProfile rep id = {props?.userId} />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            11/04/2021
          </Typography>
          
          <Typography sx={{ color: 'text.secondary' }}>{props?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {props?.description}
          </Typography>
          <br/>
            {
              props?.chat?.map((row)=>(
                   <div style = {{display : 'flex', alignItems : 'center'}}>
                    <Avatar
            alt="Remy Sharp"
          />
          <div style={{marginLeft : '10px'}}>
             <UserProfile raw id = {row?.who}/>
            <div>{row?.mes}</div>
          </div>
            </div>
              ))
            }
           <InputForm>
       
              <Hold>
           
                 <MessageReq id = {props._id}/>
        </Hold>
     </InputForm>
        </AccordionDetails>
      </Accordion>
           </> : null
         }
         </> 
          ))
        }
         </> : null
       }
     
   
   
      </div>
        </Container>
    )
}

export default RequestPage

const Container = styled.div`
display : flex;
justify-content: center;
/* align-items: center; */
/* background-color: red; */
height : 100vh;
width : 100%;
flex-direction : column;
overflow-y: scroll;

h2{
    margin-left : 60px
}
h6{
    margin-left : 60px;
    font-weight : bold
}


button{
  width : 48%;
border : none;
height : 40px;
background-color: #ec4214;
color : white
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

const InputForm = styled.div`
display : flex;
flex-direction : column;
width: 80%;
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
textarea{
  height : 70px;
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
select{
  height : 40px;
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







