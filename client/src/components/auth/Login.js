import React, {Component} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from 'classnames';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                <div className="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">
                                    <img src="https://img.icons8.com/clouds/70/000000/enter-2.png" className="mr-1" />
                                    Log In
                                </h1>
                                <p className="lead text-center">Sign in to your DevConnector account</p>
                                <form  onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img src="https://img.icons8.com/clouds/45/000000/gmail.png" />
                                        </div>
                                        <div className="col-md-11 form-group">
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
                                                className="form-control form-control-lg"
                                                value={this.state.password}
                                                placeholder="Password"
                                                name="password"
                                                onChange={this.onChange}
                                            />
                                            {errors.password && (<div className="d-flex w-100 invalid-feedback">{errors.password}</div>)}
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="font-weight-bold btn btn-blue btn-sm btn-block mt-4"
                                    >
                                        <img src="https://img.icons8.com/clouds/40/000000/hotel-room-key.png" className="mr-1" />
                                        Login
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
