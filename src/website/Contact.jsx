import React, {useEffect, useState } from 'react';
import axios from 'axios';

export default function Contact(){
    var [contactus,setContactUs] = useState([]);

    useEffect(()=>{
        node_data()
    },[]);

    var node_data = async()=>{
        var res = await axios.get('http://localhost:1000/admin/contactus_api');
        setContactUs(res.data);
    }
    console.log(contactus);
//form

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:1000/admin/contact1', formData);
          console.log('Form submitted successfully', response.data);
          alert('Form submitted successfully')
          // Reset form fields
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } catch (error) {
          console.error('Error submitting form', error);
        }
      };
    return(
        <>
        <section className="main_contact">
            <div className="container">
                <div className="row p-3 text-center">
                    <h2 className="fw-bold">We're here to listen !</h2>
                    <p>Ready to take the next step? Contact us!</p>
                    <div className="col-sm-10 col-md-10 col-10 bg-danger mt-3 mb-3 ms-5 p-3">

                        <form className="contact_form form-control bg-black border-black" onSubmit={handleSubmit}>
                            <h2 className="fw-bold">Contact Now</h2>
                            <div className="col-md-12 col-sm-12">
                                <input type="text" name="name" className="form-control mt-3" value={formData.name} onChange={handleChange} required placeholder="Enter your name"></input>
                            
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <input type="email" name="email" className="form-control mt-3" value={formData.email} onChange={handleChange} placeholder="Enter your email"></input>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <input type="text" name="subject" className="form-control mt-3" value={formData.subject} onChange={handleChange} placeholder="Subject"></input>
                            </div>
                            <div className="msg col-md-12 col-12">
                                 <textarea className="form-control mt-3" name="message" value={formData.message} onChange={handleChange} required placeholder='Message'></textarea>

                            </div>
                            <div className="col-sm-12 align-middle text-center mt-3 mb-3">
                                <button className="btn btn-lg btn-outline-success text-white ">Send Message</button>
                            </div>
                        </form>
                        
                    </div>
                    <div className="contact_infos col-xs-12 col-sm-12 col-md-12">

                    {contactus&&contactus.map((item)=>{
                        return(
                            <>
                                <div className="contact_info col-md-4 col-12 p-3 text-center float-start">
                                     <span><i className={item.contactus_icon}></i></span>
                                         <div className="media-body text-white">
                                             <h3>{item.contactus_title}</h3>
                                             <p className="fw-bold">{item.contactus_sub}</p>
                                         </div>
                                 </div>
                                 </>
                         )
                    })}

                                 {/* <div className="contact_info col-md-4 col-12 p-3 text-center float-start">
                                     <span><i className="fa-solid fa-house text-danger fs-3 m-3"></i></span>
                                         <div className="media-body text-white">
                                             <h3>Ahmednagar, Maharashtra</h3>
                                             <p className="fw-bold">3rd Floor Lendkar Apartment Balikashram Rd, near Kamala Ayurvedic Hospital, Ahmednagar, Maharashtra - 414001</p>
                                         </div>
                                 </div>
                                 <div className="contact_info col-md-4 col-12 p-3 text-center float-start">
                                     <span><i className="fa-solid fa-tablet-screen-button text-danger fs-3 m-3"></i></span>
                                         <div className="media-body text-white">
                                             <h3>+91 9011144920</h3>
                                             <p className="fw-bold">Mon to Sun 9am to 9pm</p>
                                         </div>
                                 </div>
                                 <div className="contact_info col-md-4 col-12 p-3 text-center float-start">
                                     <span><i className="fa-solid fa-square-envelope text-danger fs-3 m-3"></i></span>
                                         <div className="media-body text-white">
                                             <h3>a2zinfotech@gmail.com</h3>
                                             <p className="fw-bold">Send us your query anytime!</p>
                                         </div>
                                 </div> */}
                             </div>
                </div>
            </div>
        </section>
        </>
    )
}










// import React from "react";
// import { Link } from "react-router-dom";

// export default function Contact(){
//     return(
//         <>
//         <section className="main_contact">
//             <div className="container">
//                 <div className="row p-3 text-center">
//                     <h2 className="fw-bold">We're here to listen !</h2>
//                     <p>Ready to take the next step? Contact us!</p>
//                     <div className="col-sm-10 col-md-10 col-10 bg-danger mt-3 mb-3 ms-5 p-3">
//                         <form className="contact_form form-control bg-black border-black">
//                             <h2 className="fw-bold">Contact Now</h2>
//                             <div className="col-md-12 col-sm-12">
//                                 <input type="text" name="name" className="form-control mt-3" placeholder="Enter your name"></input>
//                             </div>
//                             <div className="col-md-12 col-sm-12">
//                                 <input type="email" name="email" className="form-control mt-3" placeholder="Enter your email"></input>
//                             </div>
//                             <div className="col-md-12 col-sm-12">
//                                 <input type="text" name="subject" className="form-control mt-3" placeholder="Subject"></input>
//                             </div>
//                             <div className="msg col-md-12 col-12">
//                                 <textarea className="form-control mt-3" placeholder="Enter Message"rows={5}></textarea>
//                             </div>
//                             <div className="col-sm-12 align-middle text-center mt-3 mb-3">
//                                 <button className="btn btn-lg btn-outline-success text-white ">Send Message</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="contact_infos col-xs-12 col-sm-12 col-md-12 col-3">
//                                  <div className="contact_info col-md-4 col-12 p-3 text-center float-start">
//                                      <span><i className="fa-solid fa-house text-danger fs-3 m-3"></i></span>
//                                          <div className="media-body text-white">
//                                              <h3>Ahmednagar, Maharashtra</h3>
//                                              <p className="fw-bold">3rd Floor Lendkar Apartment Balikashram Rd, near Kamala Ayurvedic Hospital, Ahmednagar, Maharashtra - 414001</p>
//                                          </div>
//                                  </div>
//                                  <div className="contact_info col-md-4 col-12 p-3 text-center float-start">
//                                      <span><i className="fa-solid fa-tablet-screen-button text-danger fs-3 m-3"></i></span>
//                                          <div className="media-body text-white">
//                                              <h3>+91 9011144920</h3>
//                                              <p className="fw-bold">Mon to Sun 9am to 9pm</p>
//                                          </div>
//                                  </div>
//                                  <div className="contact_info col-md-4 col-12 p-3 text-center float-start">
//                                      <span><i className="fa-solid fa-square-envelope text-danger fs-3 m-3"></i></span>
//                                          <div className="media-body text-white">
//                                              <h3>a2zinfotech@gmail.com</h3>
//                                              <p className="fw-bold">Send us your query anytime!</p>
//                                          </div>
//                                  </div>
//                              </div>
//                 </div>
//             </div>
//         </section>
//         </>
//     )
// }