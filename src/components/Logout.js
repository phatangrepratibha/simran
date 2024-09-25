import React from 'react'
import { useAuth } from '../context/AuthProvider'
 import { useNavigate } from 'react-router-dom';

const Logout = () => {
     const navigate=useNavigate();
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{

            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("local");
            alert("logout successfull!!");
             navigate("/");
            window.location.reload();
        }catch(error)
        {
              alert("logout unsuccessfull!!")
        }
    }
  return (
    <div>
      <button type="button" className="btn btn-danger" onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Logout
