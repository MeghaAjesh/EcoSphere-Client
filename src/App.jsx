
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AdminLogin from './Pages/Admin/adminLogin'
import StartupRegister from './Pages/StartUp/StartUpRegister'
import startuplogin from './Pages/StartUp/startupLogin'

function App() {

  return (
    <>
   <Header/>   
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/admin-login' element={<AdminLogin/>}/>
   <Route path='/startup-register' element={<StartupRegister/>}/>
   <Route path='/startup-login' element={<startupLogin/>} />
  </Routes>
  <Footer/>
    </>
  )
}

export default App
