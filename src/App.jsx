
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AdminLogin from './Pages/Admin/adminLogin'

function App() {

  return (
    <>
   <Header/>   
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/admin-login' element={<AdminLogin/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
