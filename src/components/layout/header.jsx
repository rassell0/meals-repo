import React from 'react';
import meals from "../../assets/meals.jpg"
import classes from "./header.module.css"
import HeaderButton from './HeaderButton';

const Header = (props) =>{
    return(
        <>
        <header className={classes.header}>
            <h1>Buddha's BBQ</h1>
            <HeaderButton onShowModal = {props.onShowModal}/>
            </header>
        
        <div className={classes["main-image"]}>
            <img src={meals} alt="table full of food"/>
        </div>
        </>
    )
}

export default Header