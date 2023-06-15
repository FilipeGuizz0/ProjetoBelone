import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import logo from './routers/imagens/logo.png'

function App() {
 

  return (
    <div className='App'>
      <div id='topo'>
         <img src={logo} title='logo' className='logo'></img>
         Tele-Saúde
         
      </div>
      <NavBar/>
      
      <Outlet/>
       
    </div>
  )
}

export default App

