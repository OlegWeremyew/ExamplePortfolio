import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../command/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.inputForms} action="#" method="POST">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <div className={style.button}>Send</div>
            </div>
        </div>
    );
};

export default Contacts;