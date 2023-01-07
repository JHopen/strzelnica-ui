import Logging from './Logging/logging';
import Account from './Account/account';
import Button from './Button/button';
import { useState } from 'react';

import './sideBar.css'

const SideBar = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);

    return (
    <div className='sideBar'>
        {loggedIn ? <Account/>:<Logging/>} <br />
        <Button title="Kalendarz"/> <br />
        <Button title="Wydarzenia"/> <br />
        <Button title="Kontakt"/> <br />
        <Button title="FAQ"/> <br /> 
    </div>)
}

export default SideBar;