import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../command/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Oleg Veremyev</h2>
                <div className={style.footerBox}>
                    <div className={style.grayBox}>1</div>
                    <div className={style.greenBox}>2</div>
                    <div className={style.grayBox}>3</div>
                    <div className={style.greenBox}>4</div>
                    <div className={style.grayBox}>5</div>
                    <div className={style.greenBox}>6</div>
                    <div className={style.grayBox}>7</div>
                    <div className={style.greenBox}>8</div>
                </div>
                <div className={style.copyright}>
                    © 2022 All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;