import React from "react";
const Navbar = () => {
    return (


        <nav className="navbar navbar-expand-lg bg-danger bg-opacity-75 text-danger-emphasis" style={{pink:"#d63384"}}>
            <div className="container d-flex justify-content-between">
                <div>
                    <a className="navbar-brand" href="#">Las zapatillas rojas</a>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" role="button" aria-expanded="false">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )}

export default Navbar 