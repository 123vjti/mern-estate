import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Signin" element={<SignIn/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/Profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>

  )
}
