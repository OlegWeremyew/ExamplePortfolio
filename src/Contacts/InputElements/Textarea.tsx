import React from 'react';
import style from "../Contacts.module.css";

const Textarea = () => {
    return (
        <div className={style.inputItems}>
            <form className={style.inputItem}  action="#" method="post">
                <div>
                    <label htmlFor="message">message :</label>
                </div>
                <div>
                    <textarea id="message"/>
                </div>
            </form>
        </div>
    );
};

export default Textarea;