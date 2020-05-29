import React from 'react'
import Project from './Project'

export default function ProjectList({ projects }) {
    return (
        projects.map(project => {
            return <Project key={project.name} project={project} />
        })
    )
}
