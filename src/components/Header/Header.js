import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.title}>Kelzamoth</div>
        </header>
    )
}

export default Header;