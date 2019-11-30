import React from 'react';
import { withRouter } from 'react-router-dom'

import './Posts.scss';

import SpinnerService from '../../components/spinner/SpinnerService';
import PageHeader from '../../components/page-header/PageHeader';
import BreadCrumb from '../../components/bread-crumb/BreadCrumb';
import Button from '../../components/button/Button';
import UserService from '../../services/UserService';
import PostService from '../../services/PostService';

class Posts extends React.Component {

    static displayName = 'Posts';

    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.match.params.userId,
            user: {},
            posts: []
        }
    
        this.populatePosts = this.populatePosts.bind(this);
    }   
    
    populatePosts() {
        return !this.state.posts 
            ? <div>No posts found</div>
            : (
                this.state.posts.map(post => {
                    return (
                        <div className="posts-item" key={post.id}>
                            <div className="posts-item-header">
                                <p className="posts-item-title">{post.title}</p>
                                <div className="posts-item-icons">
                                    <i className="fa fa-thumbs-up">
                                        <span>1</span>
                                    </i>
                                    <i className="fa fa-facebook-f"></i>
                                    <i className="fa fa-instagram"></i>
                                </div>
                            </div>
                            <p className="posts-item-body">{post.body}</p>
                        </div>
                    );
                })
            );
    }

    render() {
        return (
            <section className="posts"> 
                <BreadCrumb />

                <div className="posts-header">
                    <PageHeader title={"Posts by " + (this.state.user.name || '')}/>
                </div>

                <div className="posts-container">
                    {this.populatePosts()}
                </div>

                <div className="posts-actions">
                    <Button 
                        label="Back" 
                        click={() => this.props.history.push('/')} 
                    />
                </div>
            </section>
        )
    }

    componentDidMount() {

        SpinnerService.on();
        Promise.all([
            UserService.load(this.state.userId),
            PostService.listByUserId(this.state.userId)    
        ])
        .then(results => {
            const user = results[0].data;
            const posts = results[1].data

            this.setState({ user: user[0], posts: posts });
        })
        .catch(() => alert('Error on load posts'))
        .finally(() => SpinnerService.off());
    }
    
}

export default withRouter(Posts);