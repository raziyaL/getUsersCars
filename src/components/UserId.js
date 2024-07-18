import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function UserId() {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ textAlign: "center" }}>
            <img
                style={{width:"100px", height:"100px"}}
                src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"
                alt="User Avatar"
            />

            <div>
                <h2>{user.name}</h2>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <h2>address</h2>
                <p> {user.address.street}</p>
                <p> {user.address.suite}</p>
                <p> {user.address.city}</p>
                <p> {user.address.zipcode}</p>
                <p> {user.address.geo.lat}, {user.address.geo.lng}</p>
                <h2>company</h2>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </div>
        </div>
    );
}

export default UserId;