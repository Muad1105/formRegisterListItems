import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {} from '../../model';

function UsersList() {
    const users = useSelector((state: AppStore) => state.register);

    const value = users.userList;
    return (
        <div className="user-list">
            <table>
                <thead>
                    <tr>
                        <td>user</td>
                        <td>email</td>
                        <td>phone</td>
                        <td>gender</td>
                        <td>role</td>
                        <td>dob</td>
                    </tr>
                </thead>
                <tbody>
                    {value.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.user}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                                <td>{e.genderValue}</td>
                                <td>{e.role}</td>
                                <td>{e.dob}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UsersList;
