import React from 'react';

const User = ({user: {id, name, username}}) => {
    return (
        <div>
            <p>{id} -- {name} -- {username}</p>
        </div>
    );
}

export {User};
