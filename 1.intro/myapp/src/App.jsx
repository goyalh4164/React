import React from "react";
import "./styles/App.css"
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      {/* if no matchs then it will be redirected to this route Route */}
      <Route path="*" element={<div>Page Not Found 404</div>}/>
    </Routes>
  </Router>
};

export default App;
