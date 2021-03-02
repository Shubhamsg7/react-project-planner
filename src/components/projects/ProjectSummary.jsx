import React from 'react';
import moment from 'moment';


const ProjectSummary = ({project}) =>{
    return(
            <div className="card z-depth-0 project-summary pink lighten-2">
                <div className="card-content white-text text-darken-3">
                    <span className="card-title flow-text">{project.title}</span>
                    <p> Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="white-text">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>

    )
}

export default ProjectSummary;