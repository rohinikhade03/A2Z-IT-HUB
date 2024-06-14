import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <section className="main_menu sticky-top">
                <header className="menu">
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="menu_logo col-md-2">
                                <img className="logo1" src="https://a2zithub.org/assets/165710745335077275.png"></img>
                            </div>
                            <div className="menu_items col-md-5">
                            <nav class="navbar navbar-expand-lg">
                                <div class="container-fluid">
                                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                    <ul className="navbar-nav me-auto mb-2 mt-3 ">
                                        <li className="nav-item">
                                        <NavLink className="nav-link active text-white fw-bold " aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link text-white fw-bold " to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link text-white fw-bold " to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link text-white fw-bold " to="/batches">Batches</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link text-white fw-bold " to="/career">Career</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link text-white fw-bold " to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                            </div>
                            <div className="col-md-5 col-sm-10 col-12 mt-3  d-sm-none d-md-block">
                                <div className="menu_btns fw-bold">
                                    <button className="btn btn-outline-secondary ms-2"><a href="#" className="btn text-white">Demo</a></button>
                                    <button className="btn btn-outline-secondary ms-2"><a href="#" className="btn text-white">Batch Schedule</a></button>
                                    <form class="d-flex float-end mt-2 " role="search">
                                        <input class="form-control w-75" type="search" placeholder="Search" aria-label="Search"></input>
                                        <button class="btn btn-outline-danger" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}