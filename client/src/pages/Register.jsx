import { useState } from "react"
import {useNavigate} from "react-router-dom"
import "./Register.css"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"
export const Register = () =>{


    const [user , setuser] = useState({
        username :"" , 
        email : "" ,
        phone : "" ,
        password : ""
    })
    const navigate  = useNavigate()
    const {storetokenInLS }= useAuth()
 const handleInput  = (e)=>{
    console.log (e )
    let  name  = e.target.name 
    let value  = e.target.value 
    setuser({
        ...user , 
        [name] : value ,
    })

 }
 const handleSubmit =async (e) =>{
    e.preventDefault()
    console.log(user)

    try {
        
        const response = await fetch (`http://localhost:5000/api/auth/register` , {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
            
        })
       
        const res_data = await response.json()
        console.log("response from server " ,res_data)
    

   if (response.ok){
   
    storetokenInLS(res_data.token)
    //localStorage.setItem("token" , res_data.token)
    setuser({
        username:"",
        email:"",
        phone:"",
        password:""
    })
    navigate("/login")
   }
   else {
    toast.error (res_data.extradetails ?res_data.extradetails: res_data.msg )
   }
       
      
        console.log(response);



    } catch (error) {
        console.log(error);
    }
 }

    return(
<>
<section>
    <main>
        <div className="section-registraion">
            <div className="container grid grid-two-col">
                <div className="registraion-image">
                        <img src = "/images/register.png"  
                        alt ="pls fill the from"
                        width="500"
                        height="500"
                        />

                </div>
            </div>

            <div className="registration-from">
                <h1 className="main-heading mb-3">registration form </h1>
                <br/>

                <form onSubmit = {handleSubmit}>
                    

                    <div>
                        <label htmlFor="username">username</label>
                        <input 
                        type="text" 
                        name="username" 
                        placeholder="username"
                        id ="username" 
                        required
                        autoComplete="off"
                        value={user.username}
                        onChange={handleInput}
                        />
                        
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="enter your email"
                        id ="email" 
                        required
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                        />
                        
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input 
                        type="text" 
                        name="phone" 
                        placeholder="enter your phone "
                        id ="phone" 
                        required
                        autoComplete="off"
                        value = {user.phone}
                        onChange={handleInput}
                        />
                        
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="text" 
                        name="password" 
                        placeholder="enter the password "
                        id ="password" 
                        required
                        autoComplete="off"
                        value = {user.password}
                        onChange={handleInput}
                        />
                        
                    </div>

                    <button type = "submit" className="btn btn-submit">
                        Register Now
                    </button>
                </form>
            </div>
        </div>
    </main>
</section>
</>


    )
}