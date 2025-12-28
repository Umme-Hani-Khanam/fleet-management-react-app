import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {
    const login=localStorage.getItem("isLoggedin")
    if(!login)
    {
        return(<Navigate to ="/login"/>)
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoute