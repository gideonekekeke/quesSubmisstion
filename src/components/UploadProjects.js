import React, { useContext } from 'react'
import Leftbar from './Leftbar'
import styled from 'styled-components'

import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../Global/AuthContext';
const UploadProjects = ()=>{

  const {current} = useContext(GlobalContext)

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [assignInovator, setAssignInovator] = React.useState('')
  const [assignBdm, setAssignBdm] = React.useState('')
  const [data, setData] = React.useState([])
 
 
   let user = {
    //  userID : current?._id,
     title,
     description,
      assignInovator,
      assignBdm,
  
   }


const hist = useNavigate()
    const postData = async(e)=>{

    e.preventDefault()
 const res = await axios.post('http://localhost:8060/api/bdm/project', user )
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
            swal(hist(window.location.reload('/dashboard')));
          });
  

        
})
    }


    const getData = async()=>{
        const res = await axios.get('http://localhost:8060/api/inovators/user')
        console.log("iii", res.data.data);
        setData(res.data.data)
    }

    React.useEffect(()=>{
   getData()
    },[])


    return (
        <Container>
            <br/>
           
           
         
            <h2>Upload Projects Here!</h2>
            <br/>
             <InputForm>
       
              <Hold>
                 <Title>Project Title</Title>
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
                 <Title>Description about the project</Title>
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
                 <Title>Assign Inovator</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
               <select 
                           onChange={(e)=>{
                    setAssignInovator(e.target.value)
                  }}
               >
                  {
                    data.map((props)=>(
                        <>
                         {
                             props.bdm  ? null : <> <option value = {props._id}>{props.fullName}</option></>
                         }
                        </>
                    ))
                  }
               </select>
        </Hold>
     </InputForm>
             <InputForm>
       
              <Hold>
                 <Title>Assign BDM</Title>
                 <div style={{display : 'flex'}}>
                  <span>*</span><h6>field is required</h6>

                 </div>
               <select 
                           onChange={(e)=>{
                    setAssignBdm(e.target.value)
                  }}
               >
                  {
                    data.map((props)=>(
                        <>
                         {
                             props.bdm ? <>
                                     <option value = {props._id}>{props.fullName}</option>
 
                             </> : null
                         }
                        </>
                    ))
                  }
               </select>
        </Hold>
     </InputForm>
     
   
   
     <InputForm>
       
              <Hold>
        <button  
        onClick = {postData}
        
        >Submit</button>
           
        </Hold>
     </InputForm>
        </Container>
    )
}

export default UploadProjects

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