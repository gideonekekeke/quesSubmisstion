import axios from 'axios'
import React, { useContext } from 'react'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Global/AuthContext';
const MessageReq = ({id})=>{
    const {current} = useContext(GlobalContext)
    const [mes, setMes] = React.useState('')
     const hist = useNavigate()

     let user = {
       who : current?._id,
         mes
     }


     console.log("id oooo", id);

       const postMessage = async(e)=>{

    e.preventDefault()
 const res = await axios.post(`http://localhost:8060/api/bdm/request/${id}`, user )
 .then((res)=>{
    console.log(res)

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

    return(
        <div>
             <div style = {{display : 'flex', width : '100%', justifyContent : 'space-between', alignItems : 'center'}}>  <input
             onChange={(e)=>{
                 setMes(e.target.value)
             }}
             style = {{width : '100%'}} placeholder='Title of report' /> <button onClick = {postMessage}>submit</button></div>
        </div>
    )
}

export default MessageReq