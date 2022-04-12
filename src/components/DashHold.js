import { Grid, makeStyles } from "@material-ui/core";
import { useContext } from "react";
// import Add from "./components/Add";
import Feed from "./Feed";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import ProjectTable from "./ProjectTable";
import Report from "./Reports";
import Rightbar from "./Rightbar";
import  {GlobalContext} from '../Global/AuthContext'
import RequestPage from "./RequestPage";
import UploadProjects from "./UploadProjects";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const DashHold = () => {
  const {first, second, third, fourth} = useContext(GlobalContext)
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
  
        {
          first ? <div>
              <Feed />
          <br/>
          <br/>
          <ProjectTable/>
          </div> : <div>
            {
              second ?   <Report/>  : <div>{
                third ? <RequestPage/> : <div>
                  {
                    fourth ? <UploadProjects/> : null
                  }
                </div>
                }</div>
            }
          </div>
        }


        
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      {/* <Add /> */}
    </div>
  );
};

export default DashHold;
