import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from "react-router-dom";
import {Home} from "./components/home";
import {Userdata} from "./components/userdata";
import{Navbar} from "./components/Navbar"
import {UserDetails} from "./components/userdetails";
import {About} from "./components/about";
// import {PrivateComponent} from "./components/privatecomponent";
import {Login} from "./components/login";

function App() {

  return (
    <div className="App">
     
      <Navbar/>
       <Routes>
       <Route path="/data/:id" element={<UserDetails/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/" element={<Userdata/>}></Route>
         <Route path="/login" element={<Login />}>
        {" "}
      </Route>
       </Routes>
    </div>
  )
}

export default App
