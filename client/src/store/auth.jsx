import { useEffect } from "react"
import {createContext , useContext, useState} from "react"

export const AuthContext = createContext()


export const AuthProvider = ({children}) =>{

  const [token , setToken]= useState(localStorage.getItem("token"))
  
  const [user ,setUser] = useState("")
  const [services , setServices] = useState([])

    const storetokenInLS = (servertoken)=>{
        setToken(servertoken)
         return localStorage.setItem("token" , servertoken)
    }
    let isloggedin = !!token 
    console.log(isloggedin )
    const Logoutuser = ()=>{
        setToken("")
        return localStorage.removeItem("token")
    }

     const userAuthentication =async ()=>{
            try {
                const response  = await fetch("http://localhost:5000/api/auth/user" , {
                    method:"GET",
                    headers:{
                        Authorization: `Bearer  ${token}`
                    },
                })

                if (response.ok){
                    const data = await response.json()
                    console.log("user data ", data.userData)
                    setUser(data.userData)
                  
                }
            } catch (error) {
                
            }
     }

     // geting the sevice data in the frontend 

     const getServices=async ()=>{
        try {
            const response = await fetch("http://localhost:5000/api/data/service" , {
                method :"GET",
            })

            if (response.ok){
                const data = await response.json()
                console.log(data.msg)
                setServices(data.msg)
            }
            
        } catch (error) {
              console.log("error in fething the service data " ,error)
        }
     }

    useEffect(()=>{
        getServices()
        userAuthentication()
    } , [])
   
    return <AuthContext.Provider value={{isloggedin,storetokenInLS,Logoutuser , user ,services}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () =>{
    return useContext(AuthContext)

}