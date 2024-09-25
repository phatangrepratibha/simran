
import axios from 'axios';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit  = async(data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
      await  axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data)
            {
                alert("signup succeful")
                navigate("/login")
                window.location.reload();

            }
            localStorage.setItem("local",JSON.stringify(res.data.user))
        }).catch((err)=>{
            console.log(err)
            alert(err.response.data.message)
        })
      }
  
  return (
 <>

 <div>
  
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder">Hello, Friends</h1>
                        <p className="lead text-center">Enter Your Details To Register</p>
                        <h5 className="mb-4">OR</h5>
                        <a href='/login' className="btn btn-outline-light rounded-pill pb-2 w-50">
                            Login</a>
                    </div>
                    <div className="col-md-6 p-5">
                    <h4>Register</h4>
                        <form  onSubmit={handleSubmit(onSubmit)} method="POST">
                            <div className="mb-3">
                                <label for="name" className="form-label">fullname</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" {...register("fullname", { required: true })} />
                                {errors.fullname && <span >This field is required</span>}
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" {...register("email", { required: true })} />
                                {errors.email && <span >This field is required</span>}
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" {...register("password", { required: true })}/>
                                {errors.password && <span >This field is required</span>}
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  



 </>
  )
}

export default Register
