import React, { useContext } from 'react'
import Leftbar from './Leftbar'
import styled from 'styled-components'

import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GlobalContext } from '../Global/AuthContext';
import UserProfile from './UserProfile';
const Report = ()=>{

  const {current} = useContext(GlobalContext)

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [dateR, setDateR] = React.useState('')
  const [recommendation, setRecommendation] = React.useState('')
  const [conclusion, setConclusion] = React.useState('')
  const [chal, setChal] = React.useState('')
  const [data, setData] = React.useState([])
 
   let user = {
     userID : current?._id,
     title,
     description,
      dateR,
      recommendation,
      conclusion,chal
   }


const hist = useNavigate()
    const postData = async(e)=>{

    e.preventDefault()
 const res = await axios.post('http://localhost:8060/api/bdm/report', user )
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
            swal(hist('/dashboard'));
          });
  

        
})
    }


    //getting all reports

    const getReports = async()=>{
      const res = await axios.get('http://localhost:8060/api/bdm/report')

      console.log('this is datadtsed', res.data);

      setData(res.data)

    }

    React.useEffect(()=>{
     getReports()
     console.log('hello world');
    },[])


    return (
        <Container>
          {
            current.isAdmin? null : <div>
                <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
          }
           {
             current?.isAdmin ? null : <div>

                <h2>Submit Reports Here!</h2>
            <br/>
             <InputForm>
       
              <Hold>
                 <Title>Title of report</Title>
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
                 <Title>Description of report</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <textarea
                              onChange={(e)=>{
                    setDescription(e.target.value)
                  }}
                  placeholder='Description of report' />
        </Hold>
     </InputForm>
             <InputForm>
       
              <Hold>
                 <Title>Report Date</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
               <select 
                           onChange={(e)=>{
                    setDateR(e.target.value)
                  }}
               >
                   <option>Weekly Report</option>
                   <option>Monthly Report</option>
               </select>
        </Hold>
     </InputForm>
     <InputForm>
       
              <Hold>
                 <Title>Recommendation</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <textarea
                              onChange={(e)=>{
                    setRecommendation(e.target.value)
                  }}
                  placeholder='Recommendation' />
        </Hold>
     </InputForm>
     <InputForm>
       
              <Hold>
                 <Title>Conclusion</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
                  <textarea 
                              onChange={(e)=>{
                    setConclusion(e.target.value)
                  }}
                  placeholder='Conclusion' />
        </Hold>
     </InputForm>
     <InputForm>
       
              <Hold>
                 <Title>Any Challenge?</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>optional</h6>

                 </div>
                  <textarea 
                            onChange={(e)=>{
                    setChal(e.target.value)
                  }}
                  placeholder='state your challenges here' />
        </Hold>
     </InputForm>
     <InputForm>
       
              <Hold>
        <button  
        onClick = {postData}
        
        >Submit</button>
           
        </Hold>
     </InputForm>
             </div>
           }
      {
        current?.isAdmin ?   
     <div>
          <h6 style = {{marginLeft : '70px', fontWeight : 'bold'}}>All Reports</h6>
     {
       data.map((props)=>(
         <div>

              <Accordion style={{width : '90%', margin : '10px', marginLeft : '60px',}}  onChange={('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
      <UserProfile rep id = {props?.userID}/>    
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
              11/04/2021 
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{props?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <span style = {{fontWeight : 'bold', fontSize : '12px', color : 'red'}}>Montly Report</span>
          </Typography>
          <Typography>
           <span style = {{fontWeight : 'bold'}}>Description</span> :  {props?.description}
          </Typography>
          <br/>
          <Typography>
           <span style = {{fontWeight : 'bold'}}>Recommendation</span> :  {props?.recommendation}
          </Typography>
          <br/>
          <Typography>
           <span style = {{fontWeight : 'bold'}}>Conclusion</span> :  {props?.conclusion}
          </Typography>
          <br/>
          <Typography>
           <span style = {{fontWeight : 'bold'}}>Challenge</span> :  {props?.chal}
          </Typography>
          {/* <br/>
           <InputForm>
       
              <Hold>
           
                  <div style = {{display : 'flex', width : '100%', justifyContent : 'space-between', alignItems : 'center'}}>  <input style = {{width : '100%'}} placeholder='Title of report' /> <div>submit</div></div>
        </Hold>
     </InputForm> */}
        </AccordionDetails>
      </Accordion>
         </div>
       ))
     }

     </div> : null
      }
        </Container>
    )
}

export default Report

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