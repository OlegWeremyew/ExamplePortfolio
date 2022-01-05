import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../command/styles/Container.module.css";

const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <div className={styleContainer.container}>
                <h2>My slills</h2>
            </div>
        </div>
    );
};

export default Skills;