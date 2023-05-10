import React from "react";
import {useState} from "react";
import Register from "./Register";
import Login from "./Login";

function ManageRegisterData () {
const [register,setRegister] = useState({
    username : "",
    password : "",
    income:""
    });

function handleChange (event){
 const updateDetails = {...register, [event.target.name]: event.target.value};
 setRegister(updateDetails);
}

    return (
    <Register register={register} onRegisterChange={handleChange} />

    )
}
export default ManageRegisterData;