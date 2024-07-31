import { useState } from "react"
import "./Login.css"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth"
import { useEffect } from "react"
import { toast } from "react-toastify"
export const Login = () =>{

    const [user , setuser] = useState({
        
        email : "" ,
      
        password : ""
    })
    const navigate  = useNavigate()
 const handleInput  = (e)=>{
    console.log (e )
    let  name  = e.target.name 
    let value  = e.target.value 
    setuser({
        ...user , 
        [name] : value ,
    })

 }
 const {storetokenInLS} = useAuth()
 const handleSubmit = async  (e) =>{
   
    e.preventDefault()
    console.log(user)
    
    try {
     const response = await fetch ("http://localhost:5000/api/auth/login"  , {
method:"POST",
headers:{"Content-type":"application/json",},
body:JSON.stringify(user)


     })
     console.log( response)
     const res_data = await response.json()
     console.log( res_data)
    if (response.ok)
    {
        toast.success("login successfull")
        
        storetokenInLS(res_data.token)
       // localStorage.setItem("token" , res_data.token)

        setuser({email :"" , password: ""})
        navigate("/")
    }
    else {
        toast.error(res_data.message)
    }
    } catch (error) {
        console.log(error)
    }
 }

 

    return(
<>
<section>
    <main>
        <div className="section-registraion">
            <div className="container grid grid-two-col">
                <div className="login-image">
                        <img src = "/images/login.png"  
                        alt ="pls fill the from"
                        width="500"
                        height="500"
                        />

                </div>
            </div>

            <div className="login-from">
                <h1 className="main-heading mb-3">Login form </h1>
                <br/>

                <form onSubmit = {handleSubmit}>
                    

                  

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
                        Login Now
                    </button>
                </form>
            </div>
        </div>
    </main>
</section>
</>

    )}