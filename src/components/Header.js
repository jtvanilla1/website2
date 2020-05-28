import React from 'react'

export default function Header() {
    return (
        <div>
            <nav class="navbar site-nav" role="navigation">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#header"><i class="fa fa-home"></i> <span>Home</span></a></li>
                    <li><a href="#portfolio"><i class="fa fa-bookmark"></i> Portfolio</a></li>
                    <li><a href="#services"><i class="fa fa-bullhorn"></i> Me</a></li>
                    <li><a href="#contact"><i class="fa fa-phone-square"></i> Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
