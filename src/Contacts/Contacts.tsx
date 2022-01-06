import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../command/styles/Container.module.css";
import Input from "./InputElements/Input";
import Textarea from "./InputElements/Textarea";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.inputForms}>
                    <Input title={"first name"} id={"first name"} />
                    <Input title={"last name"} id={"last name"} />
                    <Textarea/>
                </div>
                <div className={style.button}>
                    Send
                </div>
            </div>
        </div>
    );
};

export default Contacts;