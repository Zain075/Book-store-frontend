
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'


function App() {


  return (
    <>
    <Navbar style={{height:'10vh'}}/>
    <div style={{minHeight:'80vh',height:'min-content'}}>
     <Outlet/>
    </div>
    <MyFooter style={{height:'10vh'}}/>
       
    </>
  )
}

export default App
