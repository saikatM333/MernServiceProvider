import { useState } from "react"
import { useAuth } from "../store/auth"
import "./Contact.css"
export const Contact = () =>{

    const [contact , setcontact] = useState({
        username :"" , 
        email : "" ,
       message: "" ,
        
    })
    const [userData , setuserData]= useState(true)
 const {user }= useAuth()

if (userData && user){
    setcontact({
        username :user.username , 
        email : user.email ,
       message: "" ,
        
    })

    setuserData(false)
}
console.log("contact page ",contact.username )


 const handleInput  = (e)=>{
    console.log (e )
    let  name  = e.target.name 
    let value  = e.target.value 
    setcontact({
        ...contact , 
        [name] : value ,
    })

 }
 const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(contact)

    try {
          
        const response  = await fetch("http://localhost:5000/api/form/contact", {
         method :"POST",
         headers : {
            "Content-type" : "application/json"
         },
         body : JSON.stringify(contact)
         } )

         if( response.ok){
            
             alert("message send succesfully ")
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
                <div className="registraion-image">
                        <img src = "/images/support.png"  
                        alt ="pls fill the from"
                        width="500"
                        height="500"
                        />

                </div>
            </div>

            <div className="contact-from">
                <h1 className="main-heading mb-3">Contact form </h1>
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
                        value={contact.username}
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
                        value={contact.email}
                        onChange={handleInput}
                        />
                        
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea 
                        name="message" 
                        placeholder="enter your message "
                        id ="phone" 
                        cols="30"
                        rows="10"
                        required
                        autoComplete="off"
                        value = {contact.phone}
                        onChange={handleInput}
                        ></textarea>
                        
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