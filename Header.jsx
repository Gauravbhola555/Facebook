import React from 'react';
import "./Header.css";

function Header ({user }) {
    return(
        <div className="Header">
            <h2>Facebook Website </h2>
            <div className="Header_user">
                <img src={user_profilePic} alt="avatar" />
                <spam>{user.name}</spam>
            </div>
        </div>
    );
}

export default Header;