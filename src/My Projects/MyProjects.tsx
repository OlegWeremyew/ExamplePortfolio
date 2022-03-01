import React from 'react';
import style from './MyProjects.module.css';
import styleContainer from "../command/styles/Container.module.css";
import Project from "./Project/Project";
import {Title} from "../command/components/Title/Title";

const MyProjects = () => {

  /*  const social = {
        color: 'blue',
        backgroundImage: 'url(' + imgUrl + ')',
    };

    function HelloWorldComponent() {
        return <div style={divStyle}>Привет, мир!</div>;
    }*/

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project ProjectName={"Social Network"} Description={"network"}/>
                    <Project ProjectName={"Todolist"} Description={"Todolist"}/>
                    <Project ProjectName={"Cards"} Description={"Todolist"}/>

                </div>
            </div>
        </div>
    );
};

export default MyProjects;