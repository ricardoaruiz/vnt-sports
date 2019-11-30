import React from 'react';
import './Header.scss';

import Avatar from '../../components/avatar/Avatar'

const Header = props => {

    Header.displayName = 'Header'

    return (
        <header className="header">
            <div className="header-logo">
                <div className="header-logo_box">
                    <i className="fa fa-soccer-ball-o"></i>
                </div>
                <span className="header-logo_title">Venturus Sport</span>
            </div>
            <div className="header-user">
                <Avatar username="Ricardo Almendro Ruiz" />
                <div className="header-user_name">Ricardo Almendro Ruiz</div>
            </div>
        </header>
    )
}

export default Header;