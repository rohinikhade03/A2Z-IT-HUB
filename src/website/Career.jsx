import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Career(){

    var [da,daSet] = useState();
    var [da1,daSet1] = useState();
    useEffect(()=>{
        userload();
        userload1();
    },[]);
    var userload = async () => {
        try {
            const res = await axios.get('http://localhost:1000/admin/career_servicesapi');
            console.log('Data from API:', res.data);
            daSet(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log(da);

    var userload1 = async () => {
        try {
            const res = await axios.get('http://localhost:1000/admin/companyapi');
            console.log('Data from API:', res.data);
            daSet1(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return(
        <>
            <section className="main_placement">
                <div className="container">
                    <div className="row p-3">
                    {da?.map((item)=>{
                            return (
                        <div className="placement text-center">
                            <h2 className="fw-bold">{item.career_service_logo}</h2>
                            <p className="fs-5 p-3">{item.career_service_details}</p>
                        </div>
                     )
                    })}
                    </div>
                    <div className="row">
                        <div className="career">
                        {da?.map((item)=>{
                            return (
                            <div className="card col-md-3 col-12 align-items-center p-3 float-start text-center">
                                <div className="icon text-center">
                                    <i class={item.service_icon}></i>
                                </div>
                                <p className="fw-bold">{item.service_title}</p>
                            </div>
                            )
                        })}
                        </div>
                    </div>

                    <div className="row">
                        <h2 className="fw-bold text-center mt-3 mb-3">Our Placement at companies and promising startups</h2>
                    </div>
                    <div className="row pb-5">
                        {da1?.map((item)=>{
                            return (
                                <>
                                <div className="col-md-2 col-sm-4 col-6">
                                    <div className="companies mt-3 mb-3 p-3">
                                        <div className="company border m-2 float-start">
                                            <img src={`http://localhost:1000/uploads/${item.company_images}`} className="w-100 h-100" alt="img"></img>
                                            {/* <img src={http://localhost:1000/uploads/${item.company_images}} className="w-100 h-100"></img> */}
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}








// import React from "react";
// import { Link } from "react-router-dom";

// export default function Career(){
//     return(
//         <>
//             <section className="main_placement">
//                 <div className="container">
//                     <div className="row p-3">
//                         <div className="placement text-center">
//                             <h2 className="fw-bold">Career services</h2>
//                             <p className="fs-5 p-3">Along with preparing you for the job, we also help you prepare for your search & your interviews</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="career">
//                             <div className="card col-md-3 align-items-center p-3 float-start text-center">
//                                 <div className="icon text-center">
//                                     <i class="fa-solid fa-handshake"></i>
//                                 </div>
//                                 <p className="fw-bold">Dedicated recruiter team</p>
//                             </div>
//                             <div className="card col-md-3 align-items-center p-3 float-start text-center">
//                                 <div className="icon text-center">
//                                     <i class="fa-solid fa-users"></i>
//                                 </div>
//                                 <p className="fw-bold">Exchange job opportunities</p>
//                             </div>
//                             <div className="card col-md-3 align-items-center p-3 float-start text-center">
//                                 <div className="icon text-center">
//                                     <i class="fa-solid fa-people-arrows"></i>
//                                 </div>
//                                 <p className="fw-bold">Practice mock interviews</p>
//                             </div>
//                             <div className="card col-md-3 align-items-center p-3 float-start text-center">
//                                 <div className="icon text-center">
//                                     <i class="fa-solid fa-file-circle-check"></i>
//                                 </div>
//                                 <p className="fw-bold">Optimize your resume</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <h2 className="fw-bold text-center mt-3 mb-3">Our Placement at companies and promising startups</h2>
//                     </div>
//                     <div className="row">
//                         <div className="companies mt-3 mb-3 p-3">
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123387025581483.png" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123392658081146.jpg" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123379882693019.jpg" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123392658081146.jpg" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123412394093751.svg" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123431858988771.png" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123439059260590.png" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123457438276449.webp" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123479631523270.png" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123525772499250.avif" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123551794259025.avif" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123586663134686.png" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123736647008191.jpg" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/170123762411292092.jpg" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/171143403226914356.png" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/171143498221885839.jpeg" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/171143542144293175.jpg" className="w-100 h-100"></img>
//                             </div>
//                             <div className="company border m-2 float-start">
//                                 <img src="https://a2zithub.org/training/uploads/171143561761525689.jpg" className="w-100 h-100"></img>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }