import {Routes , Route  } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
    <div className='relative'>
    <Header/>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>   
    </div>
       
    </>
  )
}

export default App
