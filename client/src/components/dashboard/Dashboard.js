import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    onDeleteClick = () => {
        this.props.deleteAccount();
    };

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let dashboardContent;

        if (profile === null || loading) {
            dashboardContent = <Spinner />;
        } else {
            // Check if logged in user has profile data
            if (Object.keys(profile).length > 0) {
                dashboardContent = (
                    <div>
                        <p className="lead text-muted">
                            <Link to={`/profile/${profile.handle}`}>
                                <img src="https://img.icons8.com/doodle/25/000000/user.png" />
                                {user.name}</Link>
                        </p>
                        <ProfileActions />

                        <Experience
                            experience={profile.experience}
                        />

                        <Education
                            education={profile.education}
                        />

                        <div style={{ marginBottom: '60px' }} />
                        <button
                            className="btn btn-danger"
                            onClick={this.onDeleteClick}
                        >
                            Delete My Account
                            <img
                                src="https://img.icons8.com/ultraviolet/25/000000/delete-shield.png"
                                alt="delete account"
                                className="ml-1"
                            />
                        </button>
                    </div>
                );
            } else {
                // User is logged in but has no profile
                dashboardContent = (
                    <div>
                        <p className="lead text-muted">
                            <img
                                src="https://img.icons8.com/doodle/24/000000/user.png"
                                alt="user"
                                className="mr-2"
                            />
                            <span className="font-weight-bold">{user.name}</span>
                        </p>
                        <p>You have not yet setup a profile, please add some info</p>
                        <Link to="/create-profile" className="btn btn-lg btn-primary">
                            <img src="https://img.icons8.com/office/30/000000/add-user-group-woman-man.png" />
                            Create Profile
                        </Link>
                    </div>
                );
            }
        }

        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 d-flex align-items-center">
                                <div className="mr-2">
                                    <img src="https://img.icons8.com/dotty/70/000000/speed.png" />
                                </div>
                                Dashboard
                            </h1>
                            {dashboardContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
