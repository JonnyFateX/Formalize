import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './pages/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/> */}
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
