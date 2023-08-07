import React from 'react';
import { FaStackOverflow } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function footer() {
    return (
        <footer>
            <h3>Created by Nishanthi ©</h3>
            <p>
                <ul>
                    <a href='https://github.com/nisha4r'><li className="icon-style"><VscGithub /></li></a>
                    <a href='https://www.linkedin.com/in/nishanthig/'> <li className="icon-style"><AiOutlineLinkedin /></li></a>
                    <a href='https://stackoverflow.com/users/22355021/nishanthi-g'> <li className="icon-style"><FaStackOverflow /></li></a>
                </ul>
            </p>
        </footer>
    );
}
export default footer;