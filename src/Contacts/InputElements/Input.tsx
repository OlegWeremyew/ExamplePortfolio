import React from 'react';
import style from "../Contacts.module.css";

const Input = (props:any) => {
    return (
        <div className={style.inputItems}>
            <form className={style.inputItem}  action="#" method="post">
                <div>
                    <label htmlFor={props.id}>{props.title} :</label>
                </div>
                <div>
                    <input type="text" id={props.id}/>
                </div>
            </form>
        </div>
    );
};

export default Input;