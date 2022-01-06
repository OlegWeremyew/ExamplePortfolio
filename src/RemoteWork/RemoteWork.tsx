import React from 'react';
import style from './RemoteWork.module.css';
import styleContainer from "../command/styles/Container.module.css";

const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <h2 className={style.title}>Considering options for remote work</h2>
                <div className={style.action}>Hire me</div>
            </div>
        </div>
    );
};

export default RemoteWork;
