import React from 'react'

import './Avatar.scss';

export default props => {

    const getInitials = () => {

        if (!props.username) return 'XX';

        const userNameArray = props.username.split(' ');
        const firstName = userNameArray[0];
        const lastName = userNameArray[userNameArray.length-1];

        const firstNameArr = firstName.split('');
        if (!lastName || firstName === lastName) {
            return `${firstNameArr[0].toUpperCase()}${firstNameArr[1].toUpperCase()}`
        } else {
            const lastNameArr = lastName.split('');
            return `${firstNameArr[0].toUpperCase()}${lastNameArr[0].toUpperCase()}`
        }
    }

    return (
        <div className="avatar">
            {getInitials()}
        </div>
    )

}