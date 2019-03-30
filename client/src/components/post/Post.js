import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import CommentFeed from '../post/CommentFeed';
import Spinner from "../common/Spinner";
import { Link } from 'react-router-dom';
import { getPost } from "../../actions/postActions";

class Post extends Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        const { post, loading } = this.props.post;
        let postContent;

        if (post === null || loading || Object.keys(post).length === 0) {
            postContent = <Spinner />
        } else {
            postContent = (
                <div>
                    <PostItem
                        post={post}
                        showActions={false}
                    />
                    <CommentForm postId={post._id} />
                    <CommentFeed postId={post._id} comments={post.comments} />
                </div>
            );
        }

        return (
            <div className="post">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/feed" className="btn btn-blue mb-3">
                                <img
                                    src="https://img.icons8.com/flat_round/18/000000/circled-left-2.png"
                                    alt="Back"
                                    className="mr-2"
                                />
                                Back To Feed
                            </Link>
                            { postContent }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});


export default connect(mapStateToProps, { getPost })(Post);
