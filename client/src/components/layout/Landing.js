import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Developer Connector
                                </h1>
                                <p className="lead mb-5"> Create a developer profile/portfolio, share posts and get help from
                                    other developers</p>
                                <hr/>
                                <Link to="/register" className="btn btn-lg btn-primary mr-2">
                                    <i className="fas fa-user-plus mr-1"></i>
                                    Sign Up
                                </Link>
                                <Link to="/login" className="btn btn-lg btn-success">
                                    <i className="fas fa-key mr-1"></i>
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
