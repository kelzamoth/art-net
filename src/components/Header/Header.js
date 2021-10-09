import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>Kelzamoth</div>
            <div className={styles.loginBlock}>
                {props.isAuth? props.login :
                <NavLink to={'/login'} >Log in</NavLink>}
            </div>
        </header>
    )
}

export default Header;