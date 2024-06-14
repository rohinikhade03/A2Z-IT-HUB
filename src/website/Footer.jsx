import React from "react";
import { NavLink } from "react-router-dom";


export default function Footer(){
    return(
        <>
        <section className="Main Footer">
            <footer className="footer">
                <div className="container">
                    <div className="row text-white p-2">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="footer_logo">
                                <img src="https://a2zithub.org/assets/165710745335077275.png"></img>
                            </div>
                            <div className="footer_info">
                                <p>A2Z IT HUB PVT LTD was founded in 2018 with a passion for create Digital coding World. Since then, we have grown into a dynamic team of skilled professionals dedicated to making a positive impact through technology.&nbsp; !</p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-5">
                            <div className="footer_widget ms-5 mt-1">
                                <h3>Quick Links</h3>
                                <ul className="list-unstyled">
                                    <li className="mt-2 ms-2"><a className="text-decoration-none text-white"href="#">About Us</a></li>
                                    <li className="mt-2 ms-2"><a className="text-decoration-none text-white"href="#">Services</a></li>
                                    <li className="mt-2 ms-2"><a className="text-decoration-none text-white"href="#">Contact Us</a></li>
                                    <li className="mt-2 ms-2"><a className="text-decoration-none text-white"href="#">Hire from Us</a></li>
                                    <li className="mt-2 ms-2"><a className="text-decoration-none text-white"href="#">Placement</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="footer_contact">
                                <h3 className="ms-5">Contact</h3>
                                    <div className="footer-address ms-5 mt-3">
                                        <p>3rd Floor Lendkar Apartment Balikashram Rd, near Kamala Ayurvedic Hospital, Ahmednagar, Maharashtra 414001</p>
                                    </div>
                                    <ul className="mobile list-unstyled ms-5">
                                        <li className="mt-3"><a className="text-decoration-none text-white" href="/">Phone: +91 9011144920</a></li>
                                        <li className="mt-3"><a className="text-decoration-none text-white" href="/">Email: a2zinfotech@gmail.com</a></li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-10 col-12 ">
                            <div className="footer_links">
                                {/* <h3>Follow Us</h3>
                                <ul className="list-unstyled">
                                    <li><NavLink to="https://www.facebook.com/a2zinfo.ithub/"><i class=" fs-2 mt-2 fa-brands fa-facebook"></i></NavLink></li>
                                    <li><NavLink to="https://api.whatsapp.com/send?phone=919011144920"><i class="fs-2 mt-2 fa-brands fa-whatsapp"></i></NavLink></li>
                                    <li><NavLink to="https://www.linkedin.com/company/a2zinfotechs"><i class="fs-2 mt-2 fa-brands fa-linkedin"></i></NavLink></li>
                                    <li><NavLink to="https://www.instagram.com/a2z.ithub/"><i class="fs-2 mt-2 fa-brands fa-square-instagram"></i></NavLink></li>
                                </ul> */}
                                <div className="footer_map mt-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.052134329186!2d74.72775317505283!3d19.10536868210519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb17ca9d749e5%3A0x516744f9b2f35ec9!2sA2Z%20IT%20HUB%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1717656546438!5m2!1sen!2sin" width="450" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="footer_links col-lg-12 col-md-12 col-sm-12 col-12 bg-info">
                                <ul className="list-unstyled d-flex">
                                    <li className="ms-3 me-3"><NavLink to="https://www.facebook.com/a2zinfo.ithub/"><i class=" fs-2 fa-brands fa-facebook"></i></NavLink></li>
                                    <li className="ms-3 me-3"><NavLink to="https://api.whatsapp.com/send?phone=919011144920"><i class="fs-2 fa-brands fa-whatsapp"></i></NavLink></li>
                                    <li className="ms-3 me-3"><NavLink to="https://www.linkedin.com/company/a2zinfotechs"><i class="fs-2 fa-brands fa-linkedin"></i></NavLink></li>
                                    <li className="ms-3 me-3"><NavLink to="https://www.instagram.com/a2z.ithub/"><i class="fs-2 fa-brands fa-square-instagram"></i></NavLink></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
            
        </>
    )
}