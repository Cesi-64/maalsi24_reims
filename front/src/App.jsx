import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'

import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Error from './pages/Error'

import Login from './pages/Login'
import AuthGuard from './_helpers/AuthGuard'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          
          
            <Route path="/service" element={
              <AuthGuard>
                <Service/>
              </AuthGuard>
            }/>
          
          <Route path="/contact" element={<Contact/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="*" element={<Error/>}/>
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App
