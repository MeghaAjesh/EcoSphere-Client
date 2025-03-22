
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AdminLogin from './Pages/Admin/AdminLogin'
import StartupRegister from './Pages/StartUp/StartUpRegister'
import StartupLogin from './Pages/StartUp/StartupLogin'
import UserRegister from './Pages/User/UserRegister'
import UserLogin from './Pages/User/UserLogin'

function App() {

  return (
    <>
   <Header/>   
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/admin-login' element={<AdminLogin/>}/>
   <Route path='/startup-register' element={<StartupRegister/>}/>
   <Route path='/startup-login' element={<StartupLogin/>} />
   <Route path='/user-register' element={<UserRegister/>}/>
   <Route path='/user-login' element={<UserLogin/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
