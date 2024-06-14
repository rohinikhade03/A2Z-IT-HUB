import React from "react";
import { Link } from "react-router-dom";
import Home_part2 from "./Home_part2";

export default function Services(){
    return(
        <>
        <Home_part2></Home_part2>
        <section className="main_services">
            <div className="container">
                <div className="row p-3">
                    <div className="col-md-4 align-middle mt-5 p-3">
                        <p className="fs-4"><span className="fs-2 fw-bold">Unlock</span> the power of innovation with our cutting-edge website and software solutions.</p>
                    </div>
                    <div className="col-md-8">
                        <img className="w-100" src="https://a2zithub.org/assets/img10.png"></img>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-md-8">
                        <img className="w-100 h-75" src="service.png"></img>
                    </div>
                    <div className="col-md-4 align-middle mt-5 p-3">
                        <p className="fs-4 mt-3"><span className="fs-2 fw-bold">Application Development</span> Experience the power of tailored application development that brings your ideas to life.</p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12 mb-5 text-center">
                        <h2>A <span className="text-white fs-1 fw-bold">landmark</span><br></br> partnership expansion<br></br> with a2Z for enhanced Business</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="partners mb-3">
                        <div className="col-md-3 col-sm-10 col-12 card float-start mt-2 mb-3 p-2 border">
                            <h5 className="fw-bold">Singavi Jewellers</h5>
                            <p>SingaviJewellers.com is Designed and deployed a visually stunning digital marketing campaign for a high-end jewelry brand, increasing brand awareness and driving customer engagement.</p>
                            <button className="btn btn-outline-secondary">Wanna Check?</button>
                        </div>
                        <div className="col-md-3 col-sm-10 col-12 card float-start mt-2 mb-3 p-2 border">
                            <h5 className="fw-bold">Nagebaba Multistate</h5>
                            <p>Successfully implemented a centralized ERP system for a multi-state business, enabling seamless communication, streamlining operations, and improving overall efficiency.</p>
                            <button className="btn btn-outline-secondary">Wanna Check?</button>
                        </div>
                        <div className="col-md-3 col-sm-10 col-12 card float-start mt-2 mb-3 p-2 border">
                            <h5 className="fw-bold">RNarvade Empire</h5>
                            <p>R Narvade Empire is a commercial building project for a client who constructs a high-rise condominium, offering luxury living spaces with breathtaking views and top-notch amenities.</p>
                            <button className="btn btn-outline-secondary">Wanna Check?</button>
                        </div>
                        <div className="col-md-3 col-sm-10 col-12 card float-start mt-2 mb-3 p-2 border">
                            <h5 className="fw-bold">Sri Balaji Tranport</h5>
                            <p>Developed a comprehensive transportation management system, enabling efficient route planning, real-time tracking, and streamlined logistics operations for a transport company.</p>
                            <button className="btn btn-outline-secondary">Wanna Check?</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-3 mb-3">
                        <h2 className="text-center  fs-1"><span className="text-white fw-bold">Explore</span> like never before...!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="services mt-2 mb-3">
                        <div className="service card col-md-2 col-sm-6 col-12 p-3 text-center float-start ms-3 me-3">
                            <i class="fa-solid fa-briefcase fs-1 mt-3 mb-3"></i>
                            <h5> Custom Software Development</h5>
                        </div>
                        <div className="service card col-md-2 col-sm-6 col-12 p-3 text-center float-start ms-3 me-3 mt-5 border border-danger">
                            <i class="fa-solid fa-list-check fs-1 mt-3 mb-3"></i>
                            <h5> Web Application Development</h5>
                        </div>
                        <div className="service card col-md-2 col-sm-6 col-12 p-3 text-center float-start ms-3 me-3">
                            <i class="fa-solid fa-chart-simple fs-1 mt-3 mb-3"></i>
                            <h5> Mobile Application Development</h5>
                        </div>
                        <div className="service card col-md-2 col-sm-6 col-12 p-3 text-center float-start ms-3 me-3 mt-5 border border-danger">
                            <i class="fa-solid fa-rectangle-ad fs-1 mt-3 mb-3"></i>
                            <h5>  Digital Marketing</h5>
                        </div>
                        <div className="service card col-md-2 col-sm-6 col-12 p-3 text-center float-start ms-3 me-3">
                            <i class="fa-solid fa-briefcase fs-1 mt-3 mb-3"></i>
                            <h5> Custom Software Development</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
    )
}