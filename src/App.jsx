import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'
import Home from './pages/Home/Home'
import Layout from './pages/Layout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Auth } from './api/auth/auth'

const AuthContext = createContext()
const auth = new Auth()

export default function App() {
  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export {AuthContext}