import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login(){
    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    const password=watch('password');
    const navigate = useNavigate();
    const loginUser = (data) =>{
        axios.post('http://localhost:9091/myapp/register', data).then(response =>{
            console.log(response)
            navigate('/');
        }).catch(error =>{
            console.log('getting error')
        })
    }
    return(
        <>
        <div className="conatiner">
            <div className="row">
                <div className="col-md-4 mx-auto">
                   <h2 className="text-center">Login</h2>
                 <form onSubmit={handleSubmit(loginUser)} noValidate>
                 <div className="mb-3">
                    <lable for='email' className='form-lable'>Email Address</lable>
                    <input type="email" className="form-control" id="email"{...register('email',{required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}/>
                    {errors.email?.type === 'required' && <p className="text-danger">please enter email</p>}
                   {errors.email?.type === 'pattern' && <p className="text-danger">incorrect email format</p>}
                   </div>
                   <div className="mb-3">
                    <label for='password' className="form-lable">password</label>
                    <input type="password" className="form-control" id="password"{...register('password', {required:true})}/>
                    {errors.password?.type === 'required' && <p className="text-danger">please enter password</p>}
                   </div>
                   <button type="submit" className="btn btn-primary mb-4">login</button>
                   <div className="mt-3 mb-3">
                    <p>Don't have an account?<Link to={"/Register"}><span ><button className="p-1 mx-2 border-0 rounded-pill">Create one</button></span></Link></p>
                   </div>
                 </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;