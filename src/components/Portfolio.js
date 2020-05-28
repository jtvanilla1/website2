import React, { useState } from 'react'
import ProjectList from './ProjectList'

export default function Portfolio() {
    const [projects, addProjects] = useState([{
        /*insert project template details here*/
    }])
    return (
        <div>
            <header>
                <h1>Latest Works</h1>
            </header>
            <div>
                <ProjectList projects={projects} />
            </div>
        </div>
    )
}
