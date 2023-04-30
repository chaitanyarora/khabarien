import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link className="mx-auto" to="/">
                        <img className="justify-content-center" src="favicon.ico" width="90" height="90" alt="" />
                    </Link>
                    <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Khabarien - One stop for all your news bytes!</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <Link className='nav-link' to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className='nav-link' to="/world">International</Link>
                                </li>
                                <li>
                                    <Link className='nav-link' to="/business">Business</Link>

                                </li>
                                <li>
                                    <Link className='nav-link' to="/entertainment">Entertainment</Link>

                                </li>
                                <li>
                                    <Link className='nav-link' to="/sports">Sports</Link>

                                </li>
                                <li>
                                    <Link className='nav-link' to="/technology">Technology</Link>
                                </li>
                                <li>
                                    <Link className='nav-link' to="/science">Science</Link>
                                </li>
                            </ul>
                            <small className='position-absolute bottom-0 mb-3 ms-2'>A website by <em className='display-6'><Link className='nav-link' target='_blank' to='https://www.linkedin.com/in/chaitany-arora-693872201/'>Chaitany Arora</Link></em></small>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center mx-auto'>
                    <em className='text-light'>one stop for all your news bytes!</em>
                </div>
            </nav>
        </div>
    )
}
