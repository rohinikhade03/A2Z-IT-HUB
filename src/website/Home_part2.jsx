import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home_part2(){
    var [home2,setHome2] = useState([]);

    useEffect(()=>{
        node_data()
    },[]);

    var node_data = async()=>{
        var res = await axios.get('http://localhost:1000/admin/home_part2_api');
        setHome2(res.data);
    }
    console.log(home2);
    return(
        <>
            <section className="home_part2">
                <div className="container">
                {home2&&home2.map((item)=>{
                        return(
                            <>

                    <div className="row">
                        <h2 className="text-center mt-3 mb-3">{item.feature_title}</h2>
                    </div>
                    <div className="row ">
                        <div className="program-cards mt-3 mb-3">
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                                <img src={`http://localhost:1000/uploads/home_part2/${item.feature_img1}`} alt="1"></img>
                                <h3>{item.feature_name1}</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                                <img src={`http://localhost:1000/uploads/home_part2/${item.feature_img2}`} alt="2"></img>
                                <h3>{item.feature_name2}</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                            <img src={`http://localhost:1000/uploads/home_part2/${item.feature_img3}`} alt="3"></img>
                            <h3>{item.feature_name3}</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                            <img src={`http://localhost:1000/uploads/home_part2/${item.feature_img4}`} alt="4"></img>
                            <h3>{item.feature_name4}</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                            <img src={`http://localhost:1000/uploads/home_part2/${item.feature_img5}`} alt="5"></img>
                            <h3>{item.feature_name5}</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                            <img src={`http://localhost:1000/uploads/home_part2/${item.feature_img6}`} alt="6"></img>
                            <h3>{item.feature_name6}</h3>
                            </div>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="programs_heading">
                            <h2 className="text-center mt-3 mb-3">{item.program_title}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="programs">
                            <div className="programs_designed col-md-4 col-sm-10 col-12 float-start">
                                <div className="card p-2 text-center mt-2 mb-3">
                                    <i><i class="{item.program_icon1} text-danger fs-2 m-2"></i></i>
                                    <h3 className="text-center">{item.program_name1}</h3>
                                    <p className="text-center">{item.program_info1}</p>
                                </div>
                            </div>
                            
                            <div className="programs_designed col-md-4 col-sm-10 col-12 float-start">
                                <div className="card p-2 text-center mt-2 mb-3">
                                    <i class="{item.program_icon2} text-danger fs-2 m-2"></i>
                                    <h3 className="text-center">{item.program_name2}</h3>
                                    <p className="text-center">{item.program_info2}</p>
                                </div>
                            </div>
                            <div className="programs_designed col-md-4 col-sm-10 col-12 float-start">
                                <div className="card p-2 text-center mt-2 mb-3">
                                    <i class="{item.program_icon3} text-danger fs-2 m-2"></i>
                                    <h3 className="text-center">{item.program_name3}</h3>
                                    <p className="text-center">{item.program_info3}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="row">
                        <h2 className="text-center mt-3 mb-3"> A program to master Problem Solving & System Design</h2>
                    </div>
                    <div className="row ">
                        <div className="program-cards mt-3 mb-3">
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                                <img src="https://assets-v2.scaler.com/assets/academy/svg/at-a-glance/structured-c36517d8d41efb3a24cbcb3fe1c8b27ffcfacb6b1462ec3e60516504a07eaff6.svg.gz"></img>
                                <h3>Problem Solving</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                                <img src="https://assets-v2.scaler.com/assets/academy/svg/at-a-glance/live-classes-afff2e39f63a26a19ee4ae844d4b0891c20c50e4b670a224564640cbb973f867.svg.gz"></img>
                                <h3>Live classes by faculty</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                                <img src="https://assets-v2.scaler.com/assets/academy/svg/at-a-glance/project1-9fc6130d4e271198d5f051da0712b27627c872a353dac61c91f248e4f60b6ddf.svg.gz"></img>
                                <h3>Practical experience</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                                <img src="https://assets-v2.scaler.com/assets/academy/svg/at-a-glance/flexibility-94067174b36a4a38b3448219f64ccd3e42b3f32667c5ff0ec8d8fab665525d87.svg.gz"></img>
                                <h3>Regular 1:1 mentorship</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-10 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                                <img src="https://assets-v2.scaler.com/assets/academy/svg/at-a-glance/mentor-efc7b3e100e7f2bd17f1f95f4ca28b5205ac3f4e04d4cddd064a800cc63f1c74.svg.gz"></img>
                                <h3>Real-life projects</h3>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12 m-3 ms-3 float-start">
                            <div className="card p-2 text-center">
                                <img src="https://assets-v2.scaler.com/assets/academy/svg/at-a-glance/career-support-c92399914995cba52680341de44c1ce49d292b1de0f10aeb58c3c58a79e3ad3b.svg.gz"></img>
                                <h3>Career Guidance</h3>
                            </div>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="programs_heading">
                            <h2 className="text-center mt-3 mb-3">We have designed a <strong className="">flexible program</strong> for you!</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="programs">
                            <div className="programs_designed col-md-4 col-sm-10 col-12 float-start">
                                <div className="card p-2 text-center mt-2 mb-3">
                                    <i><i class="fa-solid fa-book text-danger fs-2 m-2"></i></i>
                                    <h3 className="text-center">Missed a class?</h3>
                                    <p className="text-center">Watch the recording later, with teaching assistants available to solve your doubts.</p>
                                </div>
                            </div>
                            
                            <div className="programs_designed col-md-4 col-sm-10 col-12 float-start">
                                <div className="card p-2 text-center mt-2 mb-3">
                                    <i class="fa-solid fa-notes-medical text-danger fs-2 m-2"></i>
                                    <h3 className="text-center">Want to revise?</h3>
                                    <p className="text-center">Access assignments/notes lifelong and recordings even after post course completion.</p>
                                </div>
                            </div>
                            <div className="programs_designed col-md-4 col-sm-10 col-12 float-start">
                                <div className="card p-2 text-center mt-2 mb-3">
                                    <i class="fa-solid fa-circle-question text-danger fs-2 m-2"></i>
                                    <h3 className="text-center">Have doubts?</h3>
                                    <p className="text-center">Get them resolved over text / video by our expert teaching assistants!.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    </>
                 )
                })}
                </div>
                            
            </section>
        </>
    )
}