import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from './Componets/HomeScreen/HomeScreen';
import InovatorsQuest from './Componets/Inovators/InovatorsQuest';
import SignIn from './Componets/SignIn/SignIn';
import DashHold from './components/DashHold';
import Report from './components/Reports';
import InovatorRegister from './Componets/Inovators/InovatorRegister';
import InovatorSignIn from './Componets/SignIn/InovatorSignIn';

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path = '/'  element = {<HomeScreen/>}/>
          <Route path = '/inovator-question'  element = {<InovatorsQuest/>}/>
          <Route path = '/signin'  element = {<SignIn/>}/>
          <Route path = '/invatorsignin'  element = {<InovatorSignIn/>}/>
          <Route path = '/dashboard'  element = {<DashHold/>}/>
          <Route path = '/register'  element = {<InovatorRegister/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
