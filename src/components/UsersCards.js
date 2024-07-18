import React from 'react';
import {Link} from "react-router-dom"

function UsersCards({users}) {
    return (
        <div>
            <Link to={`/users/${users.id}`} key={users.id}>
                <img style={{width: "300px", height: '400px'}} src="https://habrastorage.org/getpro/habr/post_images/c7e/b3d/1fd/c7eb3d1fd23f5d761540bed09ae4d63a.gif" alt=""/>
                <div>
                    <h2>{users.name}</h2>
                    <p>{users.username}</p>
                </div>
            </Link>
        </div>
    );
}

export default UsersCards;