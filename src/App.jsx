

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Adminpage from './Adminpage'
import ProtectedRoute from "./ProtectedRoute"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/adminpage' element=
          {
            <ProtectedRoute>
              <Adminpage/>
            </ProtectedRoute>
          }/>
      
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App