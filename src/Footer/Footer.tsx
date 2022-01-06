import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../command/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Oleg Veremyev</h2>
                <div className={style.footerBox}>
                    <div className={style.Box}>1</div>
                    <div className={style.Box}>2</div>
                    <div className={style.Box}>3</div>
                    <div className={style.Box}>4</div>

                </div>
                <div className={style.copyright}>
                    © 2022 All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;