import React, { useState } from 'react'
import ProjectList from './ProjectList'

export default function Portfolio() {
    const [projects, addProjects] = useState([{
        
        /*insert project template details here*/
        title: "Personal Website",
        img: "img/work1.jpg",
        ghlink: "https://github.com/jtvanilla1/Biola-University-Department-of-Computer-Science-Unofficial-Website",
        presentation: "https://drive.google.com/open?id=1DYHgoZ0O5Fhi3OVgLcy6eSK1DDyepygg"
    }])

    
    return (
        <div id="portfolio">
            <header>
                <h1>Latest Works</h1>
            </header>
            <div>
                <ProjectList projects={projects} />
            </div>
        </div>
    )
}
