import React from 'react';

function NavBar(props){

    return(
        <nav>
            <ul className='nav nav-tabs'>
                <li><a href="#"> About me</a></li>
                <li><a href="#"> Portfolio</a></li>
                <li><a href="#"> Contact</a></li>
                <li><a href="#"> Resume</a></li>
              
            </ul>
        </nav>
    );
}

export default NavBar;