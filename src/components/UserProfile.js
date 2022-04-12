import React from 'react'
import Typography from '@mui/material/Typography';
import axios from 'axios';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { styled } from '@mui/material/styles';
const UserProfile = ({id, name, rep, pe, raw})=>{
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

            {
                rep ?  <Typography style = {{fontSize : '13px', fontWeight : 'bold'}} sx={{ width: '33%', flexShrink: 0 }}>
             From {data?.fullName} {id}
          </Typography> : null
            }

          {
              name ? <>
                        <StyledTableCell align="right">{data.fullName}</StyledTableCell>
              
              </> : null
          }

          {
              pe ? <>
                        <StyledTableCell align="right">{data.fullName}</StyledTableCell>
              
              </> : null
          }

          {
              raw ?  <span style = {{fontSize : '12px', color : 'silver'}}>{data?.fullName}</span> : null
          }
          </div>
    )
}

export default UserProfile