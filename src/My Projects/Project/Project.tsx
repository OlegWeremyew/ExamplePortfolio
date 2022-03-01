import React from 'react';
import style from './Project.module.scss';

type ProjectPropsType = {
    ProjectName: string
    Description: string
    style: { backgroundImage: string }
}

const Project = ({ProjectName, Description, ...props}: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.projectImage} style={props.style}>
                <a className={style.projectImageBtn} href="#">Watch</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{ProjectName}</h3>
                <div className={style.description}>{Description}</div>
            </div>
        </div>
    );
};

export default Project;