import Home from "./components/Home";
import Navbar from './AppBar/Navbar'
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Toolbar,Box } from "@mui/material";
import PrivateComponent from "./components/PrivateComponent";
function App() {
  return (
    <> 
   
       
      <BrowserRouter>
      <Navbar/>
      <Toolbar/>
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about/:id" element={<About/>}/>
         
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
