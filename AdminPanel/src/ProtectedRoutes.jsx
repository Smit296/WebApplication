import React from 'react'
import {Navigate,useLocation} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
const ProtectedRoutes = ({children}) => {
    // const user = localStorage.getItem('authenticated')
    const {isAuthenticated,user} = useAuth0()
    debugger;
    console.log("user: " + isAuthenticated)
    let location = useLocation();
  console.log("location: " + location,user)
    if(!isAuthenticated){
        console.log("user not found")
        return <Navigate to="/" replace/>
    }
console.log("child: " + children)
  return children
}

export default ProtectedRoutes