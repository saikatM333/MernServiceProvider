import {BrowserRouter , Routes , Route } from "react-router-dom"
import {Home } from "./pages/Home"
import {Contact } from "./pages/Contact"
import {Service } from "./pages/Service"
import {Register } from "./pages/Register"
import {Login } from "./pages/Login"
import {About} from "./pages/About"
import { Navbar } from "./components/Navbar"
import {Error} from "./pages/Error"
import { Logout } from "./pages/Logout"

function App() {
 return (<div  className="root">
 
 <BrowserRouter>
 <Navbar></Navbar>
 
 <Routes>

   <Route path="/" element={<Home />}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/service" element={<Service/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/logout" element={<Logout/>}/>
   <Route path = "*" element ={<Error />}/>
 </Routes>
 
 </BrowserRouter>
 
 
 </div>)
  
}

export default App
