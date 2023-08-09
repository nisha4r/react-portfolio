import React, { useEffect } from 'react';
import Aboutme from '../Aboutme';
import Profile from '../Profile';
import Portfolio from '../Portfolio';

function NavBar(props) {
    const {
        selectTab,
        handleTabChange,

    } = props;


    return (
        <>
            <nav>
                <ul className='nav nav-tabs'>
                    <li><a href="#"> About me</a></li>
                    <li><a href="#portfolio"
                        onClick={() => handleTabChange('Portfolio')}
                        className={selectTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}> Portfolio</a></li>
                    <li><a href="#"> Contact</a></li>
                    <li><a href="#"> Resume</a></li>

                </ul>
            </nav>

        </>
    );
}

export default NavBar;