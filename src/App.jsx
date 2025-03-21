
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
   <Header/>   
  <Routes>
   <Route path='/' element={<Home/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
