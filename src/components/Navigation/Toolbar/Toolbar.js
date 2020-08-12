import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <button onClick={props.open}>MENU</button>
       <div className={classes.Logo}>
            <Logo/>
       </div>
       
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>

);

export default toolbar;