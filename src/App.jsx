import {Routes , Route  } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'

function App() {

  return (
    <>
    <div className='relative'>
    <Header/>

      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>   
    </div>
       
    </>
  )
}

export default App
