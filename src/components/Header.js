import React from 'react'
import { fontawesome } from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faCheckSquare);


export default function Header() {
    return (
        <div>
            <nav className="navbar site-nav" role="navigation">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#header"><i><FontAwesomeIcon icon="check-square" /></i> <span>Home</span></a></li>
                    <li><a href="#portfolio"><i></i> Portfolio</a></li>
                    <li><a href="#services"><i></i> Me</a></li>
                    <li><a href="#contact"><i></i> Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
