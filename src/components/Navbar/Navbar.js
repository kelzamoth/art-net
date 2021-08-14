import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.block}>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' activeClassName={s.active}>Massege</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/art' activeClassName={s.active}>Art</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;