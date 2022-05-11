import { FunctionComponent, useState } from 'react';
import Register from '../components/main-container/Register';
import UsersList from '../components/main-container/UsersList';
import {
    BrowserRouter,
    Link,
    Routes,
    Route,
    HashRouter,
} from 'react-router-dom';
import { Locations } from '../constants/locations';

interface RouterProps {}

export const Router: FunctionComponent<RouterProps> = () => {
    return (
        <HashRouter>
            <Link to={Locations.REGISTER}>Register</Link>
            <Link to={Locations.HOME}>Home</Link>
            <Routes>
                <Route path={Locations.HOME} element={<UsersList />} />
                <Route path={Locations.REGISTER} element={<Register />} />
            </Routes>
        </HashRouter>
    );
};
