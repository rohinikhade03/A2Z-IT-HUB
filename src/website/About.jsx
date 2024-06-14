import React from "react";
import Banner from "./Banner";
import Home_part1 from "./Home_part1";

export default function About(){
    return(
        <>
            
            <Home_part1></Home_part1>
            <section className="About">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mt-3 mb-3">
                            <h2 className="fw-bold">What Do We Do?</h2>
                            <p className="fs-5 p-3">We bring high-quality education from premier universities around the world and develop rigorous programs that are experiential, valuable and progressive.
                            By primarily focusing on hands-on and experiential knowledge, we balance in-class learning and practical experiences.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="programs">
                            <div className="programs_designed col-md-4 col-sm-10 col-12 float-start">
                                <div className="card p-2 text-center mt-2 mb-3">
                                    <i class="fa-solid fa-user-check text-danger fs-2 m-2"></i>
                                    <h3 className="text-center">Expert Trainers</h3>
                                    <p className="text-center">Highly Qualified and Experienced Professionals for providing Real-Time Scenario-Based Training.</p>
                                </div>
                            </div>
                            <div className="programs_designed col-md-4 col-sm-10 col-12 float-start">
                                <div className="card p-2 text-center mt-2 mb-3">
                                    <i class="fa-solid fa-clock text-danger fs-2 m-2"></i>
                                    <h3 className="text-center">Flexible Batches</h3>
                                    <p className="text-center">Multiple Batches & Support System to make sure you can learn according to your convenience.</p>
                                </div>
                            </div>
                            <div className="programs_designed col-md-4 col-sm-10 col-12 float-start">
                                <div className="card p-2 text-center mt-2 mb-3">
                                    <i class="fa-solid fa-user-tie text-danger fs-2 m-2"></i>
                                    <h3 className="text-center">Placement Assistance</h3>
                                    <p className="text-center">After training completion, Mock-interview for everyone,  we provide Job Assistance .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="values">
                            <div className="core_values col-md-6 float-start">
                                <h2 className="fw-bold fs-2">Our Core Values</h2>
                                <div className="col-md-5 ms-3 mt-5 mb-3 p-3 float-start">
                                    <h5 className="fw-bold">Innovation</h5>
                                    <p>Embrace and drive technological innovation.</p>
                                </div>
                                <div className="col-md-5 ms-3 mt-5 mb-3 p-3 float-start">
                                    <h5 className="fw-bold">Quality</h5>
                                    <p>Deliver high-quality solutions and services.</p>
                                </div>
                                <div className="col-md-5 ms-3 mt-5 mb-3 p-3 float-start">
                                    <h5 className="fw-bold">Focus</h5>
                                    <p>Priorities client satisfaction and personalized solutions.</p>
                                </div>
                                <div className="col-md-5 ms-3 mt-5 mb-3 p-3 float-start">
                                    <h5 className="fw-bold">Improvement</h5>
                                    <p>Learn, adapt, and improve continuously.</p>
                                </div>
                                <div className="col-md-5 ms-3 mt-5 mb-3 p-3 float-start">
                                    <h5 className="fw-bold">Realiability</h5>
                                    <p>Ensure reliable and robust software and applications.</p>
                                </div>
                                <div className="col-md-5 ms-3 mt-5 mb-3 p-3 float-start">
                                    <h5 className="fw-bold">Accountability</h5>
                                    <p>Take ownership and deliver on commitments.</p>
                                </div>
                            </div>
                            <div className="col-md-6 float-start">
                                <img src="https://a2zithub.org/assets/img19.png" className="w-100"></img>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        </>
    )
}