import React from "react";
import { Link } from "react-router-dom";

export default function Batches(){
    return(
        <>
            <section className="main_batches">
                <div className="container">
                    <div className="row p-3 ms-3 me-3">
                        <div className="batches ">
                            <div className="card col-md-3 mt-3 mb-3 me-5 ms-5 float-start">
                                <h3 className="text-center shadow p-3 bg-body-tertiary rounded">Full-Stack Developer</h3>
                                <ul className="list-group fw-bold">
                                    <li className="list-group-item p-2">Duration:</li>
                                    <li className="list-group-item p-2">Time:</li>
                                    <li className="list-group-item p-2">Date:</li>
                                    <button className="btn btn-outline-danger fw-bold">Enroll Now</button>
                                </ul>
                            </div>
                            <div className="card col-md-3 mt-3 mb-3 me-5 ms-5 float-start">
                                <h3 className="text-center shadow p-3 bg-body-tertiary rounded">Core Java Developer</h3>
                                <ul className="list-group fw-bold">
                                    <li className="list-group-item p-2">Duration:</li>
                                    <li className="list-group-item p-2">Time:</li>
                                    <li className="list-group-item p-2">Date:</li>
                                    <button className="btn btn-outline-danger fw-bold">Enroll Now</button>
                                </ul>
                            </div>
                            <div className="card col-md-3 mt-3 mb-3 me-5 ms-5 float-start">
                                <h3 className="text-center shadow p-3 bg-body-tertiary rounded">Python Developer</h3>
                                <ul className="list-group fw-bold">
                                    <li className="list-group-item p-2">Duration:</li>
                                    <li className="list-group-item p-2">Time:</li>
                                    <li className="list-group-item p-2">Date:</li>
                                    <button className="btn btn-outline-danger fw-bold">Enroll Now</button>
                                </ul>
                            </div>
                            <div className="card col-md-3 mt-3 mb-3 me-5 ms-5 float-start">
                                <h3 className="text-center shadow p-3 bg-body-tertiary rounded">PHP Developer</h3>
                                <ul className="list-group fw-bold">
                                    <li className="list-group-item p-2">Duration:</li>
                                    <li className="list-group-item p-2">Time:</li>
                                    <li className="list-group-item p-2">Date:</li>
                                    <button className="btn btn-outline-danger fw-bold">Enroll Now</button>
                                </ul>
                            </div>
                            <div className="card col-md-3 mt-3 mb-3 me-5 ms-5 float-start">
                                <h3 className="text-center shadow p-3 bg-body-tertiary rounded">Web Developer</h3>
                                <ul className="list-group fw-bold">
                                    <li className="list-group-item p-2">Duration:</li>
                                    <li className="list-group-item p-2">Time:</li>
                                    <li className="list-group-item p-2">Date:</li>
                                    <button className="btn btn-outline-danger fw-bold">Enroll Now</button>
                                </ul>
                            </div>
                            <div className="card col-md-3 mt-3 mb-3 me-5 ms-5 float-start">
                                <h3 className="text-center shadow p-3 bg-body-tertiary rounded">React Developer</h3>
                                <ul className="list-group fw-bold">
                                    <li className="list-group-item p-2">Duration:</li>
                                    <li className="list-group-item p-2">Time:</li>
                                    <li className="list-group-item p-2">Date:</li>
                                    <button className="btn btn-outline-danger fw-bold">Enroll Now</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}