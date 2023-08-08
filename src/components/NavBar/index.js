import React , { useEffect } from 'react';

function NavBar(props) {


    const { handleTabChange, selectTab } = props;
    useEffect(() => {
        document.title = selectTab.name;
    }, [selectTab]);
    return (
        <nav>
            <ul className='nav nav-tabs'>
                <li><a href="#aboutme" className={selectTab === 'AboutMe' ? 'nav-link active' : 'nav-link'} onClick={() => handleTabChange('AboutMe')}> About me</a></li>
                <li><a href="#portfolio" className={selectTab === 'Portfolio' ? 'nav-link active' : 'nav-link'} onClick={() => handleTabChange('Portfolio')}> Portfolio</a></li>
                <li><a href="#contact" className={selectTab === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => handleTabChange('Contact')}> Contact</a></li>
                <li><a href="#resume" className={selectTab === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={() => handleTabChange('Resume')}> Resume</a></li>

            </ul>
        </nav>
    );
}

export default NavBar;