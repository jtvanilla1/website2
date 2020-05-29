import React from 'react'

export default function Project({ project }) {
    return (
        <div>
            <label>
                <img className="img-responsive" alt="portfolio-item" src={project.img} />
                <figcaption>
                    <h2><span>{project.title}</span></h2>
                    <p>
                        <a href={project.ghlink}><i className="fa fa-github"></i></a>
                        <a href={project.presentation}><i className="fa fa-file-powerpoint-o"></i></a>
                    </p>
                </figcaption>

            </label>
        </div>
    )
}
