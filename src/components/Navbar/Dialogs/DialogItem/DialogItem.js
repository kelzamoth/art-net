import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;

