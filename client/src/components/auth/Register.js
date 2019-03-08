import React, {Component} from 'react';

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

        console.log(newUser);
    };

    render() {
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
                                <form  onSubmit={this.onSubmit}>
                                    <div className="form-group d-flex align-items-center">
                                        <div className="mr-2">
                                            <img src="https://img.icons8.com/clouds/45/000000/employee-card.png" className="mr-1" />
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="d-flex w-100">
                                        <div className="mr-2">
                                            <img src="https://img.icons8.com/clouds/45/000000/gmail.png" />
                                        </div>
                                        <div className="form-group w-100">
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
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
                                    <div className="form-group d-flex align-items-center mb-5">
                                        <div className="mr-2">
                                            <img src="https://img.icons8.com/clouds/45/000000/synchronize.png" />
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            value={this.state.password2}
                                            placeholder="Confirm Password"
                                            name="password2"
                                            onChange={this.onChange}
                                        />
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

export default Register;
