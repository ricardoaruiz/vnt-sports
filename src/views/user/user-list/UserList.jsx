import React from 'react';
import { withRouter } from 'react-router-dom'

import './UserList.scss';

import Button from '../../../components/button/Button';
import BreadCrumb from '../../../components/bread-crumb/BreadCrumb';
import SportStatusBar from '../../../components/sport-status-bar/SportStatusBar';
import PageHeader from '../../../components/page-header/PageHeader';

import SpinnerService from '../../../components/spinner/SpinnerService';
import ToastService from '../../../components/toast/ToastService';
import UserService from '../../../services/UserService';
import PostService from '../../../services/PostService';
import AlbumsService from '../../../services/AlbumsService';
import PhotoService from '../../../services/PhotoService';
import RideService from '../../../services/RideService';
import FrequencyService from '../../../services/FrequencyService';

class UserList extends React.Component {

    static displayName = 'UserList';

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            filterdUsers: []
        }

        this.hangleSearchTerm = this.hangleSearchTerm.bind(this);
        this.gotoPosts = this.gotoPosts.bind(this);
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
                <td colSpan="10" className="no-data">No data found</td>
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
                       target="_blank" 
                       rel="noopener noreferrer"
                    >
                        {user.address.city}
                    </a>
                </td>
                <td>{user.ride}</td>
                <td>{user.frequency}</td>
                <td>
                    <a href="/" onClick={(event) => this.gotoPosts(event, user.id)}>{user.posts}</a>
                </td>
                <td>{user.albums}</td>
                <td>{user.photos}</td>
                <td>
                    <i className="fa fa-trash user-list-trash"></i>
                </td>                
            </tr>
        ))
    }

    gotoPosts(event, userId) {
        event.preventDefault();
        this.props.history.push(`/posts/${userId}`);
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

        SpinnerService.on();
        Promise.all([
            UserService.listAll(),
            PostService.listAll(),
            AlbumsService.listAll(),
            PhotoService.listAll(),
            RideService.listAll(),
            FrequencyService.listAll()
        ]).then(results => {
            const users = results[0].data;
            const posts = results[1].data;
            const albums = results[2].data;
            const photos = results[3].data;
            const ride = results[4].data;
            const frequency = results[5].data;

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
                    photos: userPhotos.length,
                    ride: ride.find(r => r.userId === user.id).value,
                    frequency: frequency.find(f => f.userId === user.id).weekdays.join(', ')
                 }
            });

            this.setState({ users: mappedUsers, filterdUsers: mappedUsers });
        })
        .catch(() => ToastService.error('Error on load data', 'Venturus Sport'))
        .finally(() => SpinnerService.off())
    }

}

export default withRouter(UserList);