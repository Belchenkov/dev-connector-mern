import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 p-0">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <div className="mr-1">
                            <img src="https://img.icons8.com/color/30/000000/electrical.png" />
                        </div>
                        <div>
                            DevConnector
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" to="/profiles">
                                    <div className="mr-1">
                                        <img src="https://img.icons8.com/office/15/000000/user-group-man-man.png" />
                                    </div>
                                    <div>
                                        Developers
                                    </div>
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" to="/register">
                                    <div className="mr-1">
                                        <img src="https://img.icons8.com/office/15/000000/add-key.png" />
                                    </div>
                                    <div>
                                        Sign Up
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" to="/login">
                                    <div className="mr-1">
                                        <img src="https://img.icons8.com/dusk/15/000000/password.png" />
                                    </div>
                                    <div>
                                        Login
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
