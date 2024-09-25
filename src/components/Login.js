import React from "react";
import axios from 'axios';
import { useForm, SubmitHandler } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";



const Login = () => {
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit  = async(data) => {
        const userInfo={
           
            email:data.email,
            password:data.password
        }
      await  axios.post("http://localhost:4001/user/login",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data)
            {
                alert("login succeful")
                navigate("/");
                window.location.reload();

            }
            localStorage.setItem("local",JSON.stringify(res.data.user))
        }).catch((err)=>{
            console.log(err)
            alert(err.response.data.message)
        })
      }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Welcome Back</h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        <h5 className="mb-4">OR</h5>
                        <a href='/register' className="btn btn-outline-light rounded-pill pb-2 w-50">
                            Register</a>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                        <form onSubmit={handleSubmit(onSubmit)} method="POST">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" {...register("email", { required: true })}  />
                                {errors.email && <span >This field is required</span>}
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name="password" {...register("password", { required: true })} />
                                {errors.password && <span  >This field is required</span>}
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                    
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-4 rounded-pill">Login</button> 
                            
                            <a class="reg active" aria-current="page" href="/signup">Register</a>
                            
                             
                          
                        </form>
                    
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login
