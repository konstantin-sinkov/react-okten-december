import React, {useEffect, useState} from 'react';

import {usersService} from "../../services";
import {User} from "../index";


const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersService.getUsers()
            .then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            <h2><u>USERS:</u></h2>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}

export {Users};
