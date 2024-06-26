import './App.css';
import Header from './Header';
import SignUp from './SignUp';
import SignUpCompleted from './SignUpCompleted';
import Welcome from './Welcome';
import {Routes , Route, Link} from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {

  

  return (
    <div className="App">
      <nav>
        <Header/>
      </nav>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signupcompleted' element={<SignUpCompleted/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
            
       
      </Routes>

      

      
      
      
    </div>
  );
}

export default App;
