import React, {Component} from 'react';
import axios from "axios";
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

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
        };

        axios.post('/api/users/login', user)
            .then(res => console.log(res.data))
            .catch(err => console.error(err.response.data))
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
                                    <div className="d-flex w-100">
                                        <div className="mr-2">
                                            <img src="https://img.icons8.com/clouds/45/000000/gmail.png" />
                                        </div>
                                        <div className="form-group w-100">
                                            <input
                                                type="email"
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.name
                                                })}
                                                value={this.state.email}
                                                placeholder="Email Address"
                                                name="email"
                                                onChange={this.onChange}
                                            />
                                            <small>
                                                This site uses Gravatar so if you want a
                                                profile image, use a Gravatar email
                                            </small>
                                        </div>
                                    </div>
                                    <div className="form-group d-flex align-items-center">
                                        <div className="mr-2">
                                            <img src="https://img.icons8.com/clouds/45/000000/password.png" />
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            value={this.state.password}
                                            placeholder="Password"
                                            name="password"
                                            onChange={this.onChange}
                                        />
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

export default Login;
