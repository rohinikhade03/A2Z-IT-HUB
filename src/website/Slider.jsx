import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Slider(){
    var [slider,setSlider] = useState([]);

    useEffect(()=>{
        node_data()
    },[]);

    var node_data = async()=>{
        var res = await axios.get('http://localhost:1000/admin/slider_api');
        setSlider(res.data);
    }
    console.log(slider);

    return(
        <>
            <section className="Slider">
                
                            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">

                                {slider&&slider.map((item)=>{
                                    return(
                                   
                                    <div class="carousel-item active" data-bs-interval="10000">
                                    <img src={`http://localhost:1000/uploads/slider/${item.slider_img}`} class="d-block w-100" alt="..."></img>
                                    <div class="carousel-caption d-none d-md-block ">
                                        <h5 className="fs-1 fw-bold">{item.slider_title}</h5>
                                        <p className="fs-4 fw-bold">{item.slider_info}</p>
                                        <NavLink to="{item.slider_btn_url}"><button className="btn fw-bold">{item.slider_btn}</button></NavLink>
                                    </div>
                                    </div>
                                     
                                    )
                                })}
                                    {/* <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="https://www.onlinecoursereport.com/wp-content/uploads/2020/04/OCR-SoftwareDevelopment-25.jpg" class="d-block w-100" alt="..."></img>
                                    <div class="carousel-caption d-none d-md-block ">
                                        <h5 className="fs-1 fw-bold">A2Z IT HUB</h5>
                                        <p className="fs-4 fw-bold">Experience digital excellence with our custom-built websites and intuitive software solutions.</p>
                                        <NavLink to="/contact"><button className="btn fw-bold">Join Now</button></NavLink>
                                    </div>
                                    </div> 

                                    <div class="carousel-item" data-bs-interval="2000">
                                    <img src="https://www.onlinecoursereport.com/wp-content/uploads/2020/04/OCR-SoftwareDevelopment-9.jpg" class="d-block w-100" alt="..."></img>
                                    <div class="carousel-caption d-none d-md-block ">
                                        <h5 className="fs-1 fw-bold">A2Z IT HUB</h5>
                                        <p className="fs-4 fw-bold">Experience digital excellence with our custom-built websites and intuitive software solutions.</p>
                                        <NavLink to="/contact"><button className="btn fw-bold">Join Now</button></NavLink>
                                    </div>
                                    </div>
                                    <div class="carousel-item">
                                    <img src="https://col.fresno.edu/sites/default/files/styles/frontpage_slider/public/slider-develop.png?itok=jsPxNjKy" class="d-block w-100" alt="..."></img>
                                    <div class="carousel-caption d-none d-md-block ">
                                        <h5 className="fs-1 fw-bold">A2Z IT HUB</h5>
                                        <p className="fs-4 fw-bold">Experience digital excellence with our custom-built websites and intuitive software solutions.</p>
                                        <NavLink to="/contact"><button className="btn fw-bold">Join Now</button></NavLink>
                                    </div>
                                    </div>
                                    */}
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                      
            </section>
        </>
    )
}