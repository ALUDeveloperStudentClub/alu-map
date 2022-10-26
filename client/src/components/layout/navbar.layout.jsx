/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/contribution'}>Contribution</Link>
                    </li>
                    <li>
                        <Link to={'/voiceAssistant'}>Voice Assistant</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
