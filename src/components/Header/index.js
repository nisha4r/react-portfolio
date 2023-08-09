import React from 'react';
import NavBar from '../NavBar'

function Header(props) {
    const { selecTab, handleTabChange } = props;
    return (<div>
        <section>
            <header>
                <div>
                    <h1>Nishanthi's Portfolio</h1>
                </div>
                <div>
                    <NavBar selecTab={selecTab}
                        handleTabChange={handleTabChange}></NavBar>
                </div>
            </header>
        </section>
        <section>
            <div>
                <h3>Welcome to Nishanthi's Portfolio</h3>
                <p>This portfolio is build with React components. List of projects are listed below, that she developed in this course.</p>
            </div>
        </section>
    </div>);

}

export default Header;