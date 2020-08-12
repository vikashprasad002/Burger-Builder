import React from 'react';
import Logo from '../../Logo/Logo';
import NavigatioItem from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
const sideDrawer =(props)=>{
    let attchedClasses=[classes.SideDrawer,classes.close];
    if(props.current){
        attchedClasses=[classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
        <Backdrop show={props.current} clicked={props.closed} />
        <div className={attchedClasses.join(' ')}>
           <div className={classes.Logo}>
                <Logo/>
           </div>
            
            <nav>
                <NavigatioItem/>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;