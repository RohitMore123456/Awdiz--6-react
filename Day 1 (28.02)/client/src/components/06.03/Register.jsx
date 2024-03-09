import { useState } from "react"

function Register (){

    const [userdata, setUserdata] = useState({name :"", email :"", password : "", confirmpassword : "" })
    console.log(userdata, "userdata")

    function handlechange(event){
        setUserdata({...userdata, [event.target.name]: event.target.value})
    }

    async function handlesubmit(event){
         event.preventDefault();
         if(userdata.name && userdata.email && userdata.password && userdata.confirmpassword){
            alert("Registration successful")
         }else{
            alert ("All Feilds are required")
         }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handlesubmit}>
                <label >Name :</label><br/>
                <input required type="Text" name="name" onChange={handlechange} /><br/>
                <label>Email :</label><br/>
                <input required type="email" name="email" onChange={handlechange}/><br/>
                <label>Password :</label><br/>
                <input required type="password" name="password" onChange={handlechange}/><br/>
                <label>Confirm Password :</label><br/>
                <input required type="Password" name="confirmpassword" onChange={handlechange}/><br/>
                <input type="Submit"/>
            </form>
        </div>
    )
}

export default Register