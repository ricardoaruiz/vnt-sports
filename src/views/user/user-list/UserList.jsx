import React from 'react';
import { withRouter } from 'react-router-dom'

import './UserList.scss';

import Button from '../../../components/button/Button';
import BreadCrumb from '../../../components/bread-crumb/BreadCrumb';
import SportStatusBar from '../../../components/sport-status-bar/SportStatusBar';
import PageHeader from '../../../components/page-header/PageHeader';

import UserService from '../../../services/UserService';
import PostService from '../../../services/PostService';
import AlbumsService from '../../../services/AlbumsService';
import PhotoService from '../../../services/PhotoService';

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            filterdUsers: []
        }

        this.hangleSearchTerm = this.hangleSearchTerm.bind(this);
    }

    hangleSearchTerm(event) {
        const searchTerm = event.target.value;

        if (!searchTerm) {
            this.setState({ filterdUsers : this.state.users });
            return;
        }
        const newFiltered = this.state.users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
        this.setState({ filterdUsers: newFiltered });
    }

    populateTable() {
        return !this.state.filterdUsers.length
            ? <tr>
                <td colSpan="9" className="no-data">No data found</td>
            </tr>
        :
        this.state.filterdUsers.map(user => (
            <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>
                    <a href={`mailto: ${user.email}`}>{user.email}</a>
                </td>
                <td>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`} 
                       target="_blank" rel="noopener"
                    >
                        {user.address.city}
                    </a>
                </td>
                <td></td>
                <td></td>
                <td>{user.posts}</td>
                <td>{user.albums}</td>
                <td>{user.photos}</td>
                <td>
                    <i className="fa fa-trash user-list-trash"></i>
                </td>                
            </tr>
        ))
    }

    render() {
        return (
            <section>
                
                <BreadCrumb />
                <SportStatusBar />

                <div className="user-list">
                    <section className="user-list-header">
                        <div className="user-list-header_title">
                            <PageHeader title="Users"/>
                        </div>
                        <div className="user-list-header_search">
                            <input type="text" placeholder="Filter by name" onChange={this.hangleSearchTerm}/>
                        </div>
                    </section>

                    <section className="user-list-data">
                        <table className="user-list-table">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>City</th>
                                    <th>Ride in group</th>
                                    <th>Day of the week</th>
                                    <th>Posts</th>
                                    <th>Albums</th>
                                    <th>Photos</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.populateTable()}
                            </tbody>
                        </table>
                    </section>

                    <div className="user-list-actions">
                        <Button label="New" click={() => this.props.history.push('/registration')} />
                    </div>                
                </div>

            </section>
        )
    }

    componentDidMount() {

        Promise.all([
            UserService.listAll(),
            PostService.listAll(),
            AlbumsService.listAll(),
            PhotoService.listAll()
        ]).then(results => {
            const users = results[0].data;
            const posts = results[1].data;
            const albums = results[2].data;
            const photos = results[3].data;

            const mappedUsers = users.map(user => {

                const userAlbums = albums.filter(album => album.userId === user.id);
                
                let userPhotos = [];
                userAlbums.forEach(album => {
                    userPhotos = userPhotos.concat(
                        photos.filter(photo => photo.albumId === album.id)) 
                });

                return { 
                    ...user,
                    posts: posts.filter(post => post.userId === user.id).length,
                    albums: userAlbums.length,
                    photos: userPhotos.length
                 }
            });

            this.setState({ users: mappedUsers, filterdUsers: mappedUsers });
        });
    }

}

export default withRouter(UserList);