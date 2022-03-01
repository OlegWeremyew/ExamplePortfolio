import React from 'react';
import style from "./Title.module.scss"

type TitlePropsType = {
    title: string
}

export const Title = ({title}: TitlePropsType) => {
    return (
        <div className={style.title}>
            <h2>{title}</h2>
        </div>
    );
};
