import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction, getIdAction} from "../redux/actions"
import UsersCards from "../components/UsersCards";

function UserPage() {

    const users =useSelector(state => state.userPageReducer.users);
    const dispatch = useDispatch();
    const usersIdState = useSelector(state => state.userPageReducer.usersIdState);

    const getUsers=()=>{
        dispatch(fetchUsersAction())
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            <div style={{display:"flex", flexWrap: "wrap", gap: "10px", height: "500px", textAlign: "center",width:"100%"}}>
                {users ?
                    (users.map(user =>(
                        <UsersCards key={user.id} users={user} />
                    ))) : <p>wait</p>
                }
            </div>
        </div>
    );
}

export default UserPage;