import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"
import Home from "./Component/Home/Home"
import About from "./Component/AboutUs/AboutUs"
import Contact from "./Component/Contact/Contact"
import Github, { loadGitPage } from "./Component/Github/Github"

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
