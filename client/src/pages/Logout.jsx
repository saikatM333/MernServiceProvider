import { useEffect } from "react"
import { useAuth } from "../store/auth"
import { Navigate } from "react-router-dom"

export const Logout = ()=>{
 const { Logoutuser} = useAuth()
    useEffect(()=>{
        Logoutuser()
    },[Logoutuser])
    return <Navigate to = "/login"/>
}