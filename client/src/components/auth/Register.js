import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from "react-redux";
import {registerUser} from "../../actions/authActions";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        /*axios.post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data }));*/
        this.props.registerUser(newUser);
    };

    render() {
        const { errors } = this.state;
        const { user } = this.props.auth;

        return (
            <div>
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">
                                    <img src="https://img.icons8.com/clouds/70/000000/add-user-male.png" className="mr-1" />
                                    Sign Up
                                </h1>
                                <p className="lead text-center">Create your DevConnector account</p>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group row">
                                        <div className="col-md-1">
                                            <img src="https://img.icons8.com/clouds/45/000000/employee-card.png" className="mr-1" />
                                        </div>
                                        <div className="col-md-11">
                                            <input
                                                type="text"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.name
                                                })}
                                                placeholder="Name"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.onChange}
                                            />
                                            {errors.name && (<div className="d-flex w-100 invalid-feedback">{errors.name}</div>)}
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img src="https://img.icons8.com/clouds/45/000000/gmail.png" />
                                        </div>
                                        <div className="form-group col-md-11">
                                            <input
                                                type="email"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.email
                                                })}
                                                value={this.state.email}
                                                placeholder="Email Address"
                                                name="email"
                                                onChange={this.onChange}
                                            />
                                            {errors.email && (<div className="d-flex w-100 invalid-feedback">{errors.email}</div>)}
                                            <small>
                                                This site uses Gravatar so if you want a
                                                profile image, use a Gravatar email
                                            </small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img src="https://img.icons8.com/clouds/45/000000/password.png" />
                                        </div>
                                        <div className="form-group col-md-11">
                                            <input
                                                type="password"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.password
                                                })}
                                                value={this.state.password}
                                                placeholder="Password"
                                                name="password"
                                                onChange={this.onChange}
                                            />
                                            {errors.password && (<div className="d-flex w-100 invalid-feedback">{errors.password}</div>)}
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-md-1">
                                            <img src="https://img.icons8.com/clouds/45/000000/synchronize.png" />
                                        </div>
                                        <div className="col-md-11 form-group">
                                            <input
                                                type="password"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.password2
                                                })}
                                                value={this.state.password2}
                                                placeholder="Confirm Password"
                                                name="password2"
                                                onChange={this.onChange}
                                            />
                                            {errors.password2 && (<div className="d-flex w-100 invalid-feedback">{errors.password2}</div>)}
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="font-weight-bold btn btn-blue btn-sm btn-block mt-4"
                                    >
                                        <img src="https://img.icons8.com/clouds/40/000000/hotel-room-key.png" className="mr-1" />
                                        Register
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(Register);
