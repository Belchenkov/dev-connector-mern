import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import isEmpty from '../../validation/is-empty';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
    onDeleteClick(id) {
        this.props.deleteExperience(id);
    }

    render() {
        const experience = this.props.experience.map(exp => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>
                    <Moment format="YYYY/MM/DD">{exp.from}</Moment> - {' '}
                    { isEmpty(exp.to) ? 'Now' :  <Moment format="YYYY/MM/DD">{exp.to}</Moment> }
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this, exp._id)}
                    >Delete</button>
                </td>
            </tr>
        ));

        return (
            <div>
                <h4 className="mb-4">Experience Credentials</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Years</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {experience}
                    </tbody>
                </table>
            </div>
        );
    }
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
