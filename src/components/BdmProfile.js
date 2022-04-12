import React from 'react'
import Typography from '@mui/material/Typography';
import axios from 'axios';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { styled } from '@mui/material/styles';
const BdmProfile = ({id})=>{
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
    const [data, setData] = React.useState([])
    const getUserData = async()=>{
        const res = await axios.get(`http://localhost:8060/api/inovators/user/${id}`)

        console.log('fgdhjkfjh', res.data.data);
        setData(res.data.data)
        console.log("fxhdjsrjrjdhhtg",id);
    }


    React.useEffect(()=>{
getUserData()
    },[id])
    return(
        <div>   


      
      
                        <StyledTableCell  align="right">{data.fullName}</StyledTableCell>
              
        
          </div>
    )
}

export default BdmProfile