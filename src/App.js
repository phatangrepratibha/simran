import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Service from './components/Service';
import { useAuth } from './context/AuthProvider';
import Recipe from './components/Recipe';
import Bibimbap from './components/Bibimbap';
import Footer from './components/Footer';
import Bulgogi from './components/Bulgogi';
import Gimbap from './components/Gimbap';
import Kimchi from './components/Kimchi';
import Ramen from './components/Ramen';
import Tteo from './components/Tteo.js';






function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <div className="App">
     <Nav/>
   
    
     
     {/* <Land/> */}

     <Routes>
     
      <Route  element={<Home/>}path="/"  exact/>
       <Route path="/recipe" element={authUser?<Recipe/>:<Navigate to="/signup" />} />
      <Route path="/signup" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/bibimbap" element={<Bibimbap/>}/>
      <Route path="/bulgogi" element={<Bulgogi/>}/>
      <Route path="gimbap" element={<Gimbap/>}/>
      <Route path="kimchi" element={<Kimchi/>}/>
      <Route path="/ramen" element={<Ramen/>}/>
      <Route path="/tteo" element={<Tteo/>}/>


     
    
     </Routes>
     <Footer/>
    
     
    </div>
  );
}

export default App;
