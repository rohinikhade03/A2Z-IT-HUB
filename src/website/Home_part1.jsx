import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home_part1(){
    var [home1,setHome1] = useState([]);

    useEffect(()=>{
        node_data()
    },[]);

    var node_data = async()=>{
        var res = await axios.get('http://localhost:1000/admin/home_part1_api');
        setHome1(res.data);
    }
    console.log(home1);

    return(
        <>
            <section className="home_part1">
                <div className="container">
                {home1&&home1.map((item)=>{
                        return(
                            
                    <div className="row">                        
                        <div className="col-md-12 text-center mt-3 mb-3">
                        <h2 className="fw-bold">{item.aboutus_title}</h2>
                            <h1 className="text-white">{item.aboutus_sub_title}</h1>
                            <p className="fs-5">{item.aboutus_description}</p>
                        </div>
                        <div className="col-md-12 text-center mt-3 mb-3">
                            <h2 className="fw-bold">{item.vision_title}</h2>
                            <p className="fs-5">{item.vision_description}</p>
                        </div>
                        
                            <div className="col-md-6 mt-3 mb-3 float-start">
                                <h2 className="fw-bold">{item.mission_title}</h2>
                                <p className="fs-5">{item.mission_description}</p>
                                <ul className="align-start mt-3">
                                    <li className="fs-5 mt-2 mb-2">{item.mission_description1}</li>
                                    <li className="fs-5 mt-2 mb-2">{item.mission_description2}</li>
                                    <li className="fs-5 mt-2 mb-2">{item.mission_description3}</li>
                                </ul>
                            </div>
                            <div className="col-md-6 mt-3 mb-3 float-start">
                                <img src={`http://localhost:1000/uploads/home_part1/${item.mission_img}`}></img>
                            </div> 

                            {/* <h2 className="fw-bold">About Us</h2>
                            <h1 className="text-white">A2Z IT HUB PVT.LTD</h1>
                            <p className="fs-5">At A2Z IT Hub,we believe in unleashing the full potential of technology to drive your business forward. With our expertise and innovation solutions, we empower you to stay ahead of the competition and achieve remarkable success.</p>
                        </div>
                        <div className="col-md-12 text-center mt-3 mb-3">
                            <h2 className="fw-bold">OUR VISION</h2>
                            <p className="fs-5">Our vision is to make a significant and <span className="fw-bold">positive impact</span> on the businesses we serve, helping them harness the full potential of technology and navigate the ever-evolving digital landscape with <span className="fw-bold">confidence</span> and <span className="fw-bold">success.</span></p>
                        </div>
                        
                            <div className="col-md-6 mt-3 mb-3 float-start">
                                <h2 className="fw-bold">OUR MISSION</h2>
                                <p className="fs-5">Our mission is to enable the success of our clients. We are committed to understanding their unique needs, challenges, and goals, and <span className="fw-bold">delivering customized solutions.</span> By partnering with our clients, we aim to create long-term value.</p>
                                <ul className="align-start mt-3">
                                    <li className="fs-5 mt-2 mb-2">Unlock the power of innovation with our cutting-edge website and software solutions</li>
                                    <li className="fs-5 mt-2 mb-2">Increase the value of our courses, services, relationships, information, and trust.</li>
                                    <li className="fs-5 mt-2 mb-2">Meet the expectations of our students, employees holistically, and develop a long-lasting, fruitful relationship, goodwill, and oneness with all.</li>
                                </ul>
                            </div>
                            <div className="col-md-6 mt-3 mb-3 float-start">
                                <img src="https://a2zithub.org/assets/img22.png"></img>
                            </div> */}
                                                    
                    </div>
                )
            })}
                    
                </div>
                            
            </section>
        </>
    )
}