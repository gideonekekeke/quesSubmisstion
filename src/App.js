import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from './Componets/HomeScreen/HomeScreen';
import InovatorsQuest from './Componets/Inovators/InovatorsQuest';

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path = '/'  element = {<HomeScreen/>}/>
          <Route path = '/inovator-question'  element = {<InovatorsQuest/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
