import React from 'react';
import style from './MyProjects.module.css';
import styleContainer from "../command/styles/Container.module.css";
import Project from "./Project/Project";

const MyProjects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    );
};

export default MyProjects;