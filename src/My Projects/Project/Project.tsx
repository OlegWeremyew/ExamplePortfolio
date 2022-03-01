import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    ProjectName: string
    Description: string
}

const Project = ({ProjectName, Description}: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.projectWatch}>
                <a className={style.projectWatchBlock} href="#">Watch</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{ProjectName}</h3>
                <div className={style.description}>{Description}</div>
            </div>
        </div>
    );
};

export default Project;