import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../command/styles/Container.module.css";
import Skill from "./Skill/Skill";

const Skills = () => {

    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatu"

    return (
        <div className={style.skillBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML5"} description={description}/>
                    <Skill title={"CSS3"} description={description}/>
                    <Skill title={"JS"} description={description}/>
                    <Skill title={"React-Redux"} description={description}/>
                    <Skill title={"NoteJS"} description={description}/>
                    <Skill title={"Git"} description={description}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;