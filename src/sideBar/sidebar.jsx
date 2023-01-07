import Logging from '../Logging/logging';
import Account from '../Account/account';
import { useState } from 'react';

import './sideBar.css'

const SideBar = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);

    return (
    <div className='sideBar'>
        {loggedIn?<Account/>:<Logging/>}
        Kalendarz <br />
        Wydarzenia <br />
        Kontakt <br />
        FAQ 
    </div>)
}

export default SideBar;