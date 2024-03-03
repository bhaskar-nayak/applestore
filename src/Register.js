import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register(){
    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    const password = watch('password');
    const navigate = useNavigate();
    const registerUser = (data) =>{
        axios.post('http://localhost:9091/myapp/register', data).then(response =>{
            console.log(response)
            navigate('/');
        }).catch(error =>{
            console.log('getting errors')
        })
    }
    return(
        <>
        <div className="conatiner">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <h2 className="text-center">Register</h2>
                   <form onSubmit={handleSubmit(registerUser)} noValidate>
                   <div className="mb-3">
                        <label for='firstname' className="form-label">firstname</label>
                        <input type="firstname" className="form-control" id="firstname"{...register('firstname', {required:true})}/>
                        {errors.firstname?.type === 'required' && <p className="text-danger">Please enter firstname</p>}
                    </div>
                    <div className="mb-3">
                        <label for='lastname' className="form-lable">lastname</label>
                        <input type="lastname" className="form-control" id="lastname"{...register('lastname', {required:true})} />
                        {errors.lastname?.type === 'required' && <p className="text-danger">Please enter lastname</p>}
                    </div>
                    <div className="mb-3">
                        <label for='email' className="form-label">email</label>
                        <input type="email" className="form-control" id="email"{...register('email', {required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}/>
                   {errors.email?.type === 'required' && <p className="text-danger">please enter email</p>}
                   {errors.email?.type === 'pattern' && <p className="text-danger">incorrect email format</p>}
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">password</label>
                        <input type="password" className="form-control" id="password"{...register('password', {required:true})}/>
                        {errors.password?.type === 'required' && <p className="text-danger"> please enter password</p>}
                    </div>
                    <button type="submit" className="btn btn-primary text-bg-dark mb-3">Submit</button>
                   </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Register;