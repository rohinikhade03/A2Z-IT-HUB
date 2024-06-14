import React from "react";


import Slider from "./Slider";
import Services from "./Services";
import About from "./About";

export default function Home(){
    return(
        <>
            <Slider></Slider>
            <About></About>
            <Services></Services>
        </>
    )
}