import {Route, Routes, } from 'react-router-dom'
import Product from './Pages/Product'
import Service from './Pages/Service'
import Parent from './Pages/Parent'
import Attendance from './Pages/Attendance'
import Dashboard from './Pages/Dashboard'
import SideNav from './Components/SideNav'
function App() {
  return (
    <SideNav>
    <Routes>
      <Route path='/' element= {<Dashboard/>}/>
      <Route path='/Product' element= {<Product/>}/>
      <Route path='/Service' element= {<Service/>}/>
      <Route path='/Parent' element= {<Parent/>}/>
      <Route path='/Attendance' element= {<Attendance/>}/>
    </Routes>
    </SideNav>
  )
}

export default App