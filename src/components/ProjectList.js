import React from 'react'
import Project from './Project'

export default function ProjectList({ projects }) {
    return (
        projects.map(data => {
            return <Project key={data} data={data} />
        })
    )
}
