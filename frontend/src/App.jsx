import Navbar from './components/Navbar'
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Menu from "./pages/Menu"
import Booking from "./pages/Booking"
import Orders from "./pages/Orders"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Blogs from "./pages/Blogs"

import { Routes, Route } from "react-router-dom"

const App = () => {


  return (
    <div className="bg-black test-white min-h-screen">
      <Navbar/>
      

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Blogs/>}/>

      </Routes>
    </div>
  )
}

export default App