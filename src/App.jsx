import {Route, Routes, } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import SideNav from './Components/SideNav'
import Categories from './Pages/Categories'
import Products from './Pages/Products'
import Customers from './Pages/Customers'
import Orders from './Pages/Orders'
import Update from './Pages/Update'

function App() {
  return (
    <SideNav> 
      {/* all routes */}
    <Routes>
      <Route path='/' element= {<Dashboard/>}/>
      <Route path='/catergories' element= {<Categories/>}/>
      <Route path='/products' element= {<Products/>}/>
      <Route path='/customers' element= {<Customers/>}/>
      <Route path='/orders' element= {<Orders/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </SideNav>
  )
}

export default App