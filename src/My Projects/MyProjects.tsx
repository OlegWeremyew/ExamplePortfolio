import React from 'react';
import style from './MyProjects.module.scss';
import styleContainer from "../command/styles/Container.module.css";
import Project from "./Project/Project";
import {Title} from "../command/components/Title/Title";
import socialNetworkImage from '../assets/images/social_network.jpg'
import cardsImage from '../assets/images/cards.png'
import todolistImage from '../assets/images/todolist.jpeg'

const MyProjects = () => {

    const social = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todolistImage})`,
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} ProjectName={"Social Network"} Description={"Network"}/>
                    <Project style={todolist} ProjectName={"Todolist"} Description={"Todolist"}/>
                    <Project style={cards} ProjectName={"Cards"} Description={"Todolist"}/>

                </div>
            </div>
        </div>
    );
};

export default MyProjects;