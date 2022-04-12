import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";
import { useContext } from "react";


import {VscReport} from 'react-icons/vsc'
import { GlobalContext } from "../Global/AuthContext";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
      color : 'white'
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
      color : 'white'
    },
  },
}));

const Leftbar = () => {
  const {first, setFirst, second, setSecond, third, setThird, fourth,setFourth, current} = useContext(GlobalContext)

  const handleHome = ()=>{
    setSecond(false)
    setFirst(true)
  }


  const handleReport = ()=>{
    setSecond(true)
    setFirst(false)
  }

  const handleRequests = ()=>{
     setSecond(false)
    setFirst(false)
    setThird(true)
  }
  const handleProducts = ()=>{
     setSecond(false)
    setFirst(false)
    setThird(false)
    setFourth(true)
  }



  const classes = useStyles();
  return (
    <Container style = {{background : 'black', color : 'white'}} className={classes.container}>
      <br/>
    
    
      <div onClick = {handleHome} className={classes.item}>
        <Home className={classes.icon} />
        <Typography style = {{color : 'white'}} className={classes.text}>Dashboard</Typography>
      </div>
       {
         current?.bdm ? <div onClick = {handleReport} className={classes.item}>
      <VscReport/>
        <Typography style = {{color : 'white', marginLeft : '10px'}} className={classes.text}>Send Reports</Typography>
      </div> : null
       }
       {
         current?.isAdmin ? <div onClick = {handleReport} className={classes.item}>
      <VscReport/>
        <Typography style = {{color : 'white', marginLeft : '10px'}} className={classes.text}>Reports</Typography>
      </div> : null
       }
       {
         current?.isAdmin ? <div onClick = {handleProducts} className={classes.item}>
      <VscReport/>
        <Typography style = {{color : 'white', marginLeft : '10px'}} className={classes.text}>Upload Project</Typography>
      </div> : null
       }


      <div onClick = {handleRequests} className={classes.item}>
      <VscReport/>
        <Typography style = {{color : 'white', marginLeft : '10px'}} className={classes.text}>Requests</Typography>
      </div>
 


      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography style = {{color : 'white'}} className={classes.text}>Logout</Typography>
           <br/>
       
      
      </div>
    </Container>
  );
};

export default Leftbar;
