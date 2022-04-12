// import { Container, makeStyles } from "@material-ui/core";
// import Post from "./Post";
import styled from 'styled-components'

import {VscChecklist} from 'react-icons/vsc'
import {BiCommentDetail} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'
import ProjectTable from './ProjectTable';
import { useContext } from 'react';
import { GlobalContext } from '../Global/AuthContext';

const Feed = () => {
  const {current} = useContext(GlobalContext)
 
  return (
    <Container>
      <br/>
      {
        current?.isAdmin ?   <h5>Welcome <span  style = {{color : '#EC4214'}}>{current?.fullName}(Admin) </span>.</h5> :   <h5>Welcome <span  style = {{color : '#EC4214'}}>{current?.fullName} </span>.</h5>
      }
  <Holder>  <Card>
      <Hold>
          <Text>50</Text>
        <Title>Total Projects</Title>
      
      </Hold>
      <IconHold><VscChecklist style = {{color : '#EC4214'}}/></IconHold>
    </Card>
    <Card>
      <Hold>
          <Text>02</Text>
        <Title>Comments</Title>
      
      </Hold>
      <IconHold><BiCommentDetail style = {{color : '#EC4214'}}/></IconHold>
    </Card>
    <Card>
      <Hold>
          <Text>03</Text>
        <Title>Team Memebers</Title>
      
      </Hold>
      <IconHold><FaUserFriends style = {{color : '#EC4214'}}/></IconHold>
    </Card>
  </Holder>
  {/* <ProjectTable/> */}
    </Container>
  );
};

export default Feed;
const Holder = styled.div`
display : flex;
flex-wrap : wrap

`


const Card = styled.div`
height : 100px;
width : 220px;
background-color: WHITE;
border-radius: 5px;
padding : 10px;
display : flex;
align-items: center;
justify-content: space-around;
margin : 10px;
/* flex-wrap : wrap */
`
const Hold = styled.div``
const Title = styled.div`
font-weight: bold;
color : silver
`
const Text = styled.div`
font-weight: bold;
font-size: 20px;
`
const Container = styled.div`
margin-top: 70px;
display: flex;
justify-content : center;
align-items: center;
/* flex-wrap: wrap; */
flex-direction: column;

h2{
  margin-left : 20px;
  justify-content : flex-start
}
`
const IconHold = styled.div`
font-size: 35px;
font-weight: bold;
`
