import React from 'react';
import style from './Project.module.css';

const Project = (props: any) => {
    return (
        <div className={style.project}>
            <div className={style.projectWatch}>
                <div className={style.projectWatchBlock}>Watch</div>
            </div>
            <div className={style.textBlock}>
                <span>Название проекта</span>
                <div className={style.description}>Описание</div>
            </div>
        </div>
    );
};

export default Project;