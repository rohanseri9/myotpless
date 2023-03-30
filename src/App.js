
import {useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './compounet/Login';
import Home from './compounet/Home';
function App() {
  return (
    <>
    <Router>
      
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/home' element={<Home/>}/>

          
          
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
