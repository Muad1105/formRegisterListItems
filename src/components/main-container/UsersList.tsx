import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {} from '../../model';

function UsersList() {
    const users = useSelector((state: AppStore) => state.register);

    const value = JSON.stringify(users.userList);

    return (
        <div>
            {/* {value.map((e, i) => {
                return <div>{e.user}</div>;
            })} */}
            {value}
        </div>
    );
}

export default UsersList;
