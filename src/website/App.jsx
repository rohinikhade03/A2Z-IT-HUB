import React from "react";
import './style.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from "./About";
import Services from './Services'
import Batches from "./Batches";
import Career from './Career';
import Contact from './Contact';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App(){
    return(
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/about" element={<About></About>} />
                    <Route path="/services" element={<Services></Services>} />
                    <Route path="/batches" element={<Batches></Batches>} />
                    <Route path="/career" element={<Career></Career>} />
                    <Route path="/contact" element={<Contact></Contact>}/>
                </Routes>
                <Footer></Footer>
            </Router>
        </>
    )
}