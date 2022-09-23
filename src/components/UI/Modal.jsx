import React, { Fragment } from 'react';
import classes from "./Modal.module.css"




const Backdrop = (props) =>{
    return <div className= {classes.backdrop} onClick={props.onHideModal}/>
}

const Overlay = (props) =>{
    return <div className= {classes.modal}>
         <div className= {classes.content}>
            {props.children}
         </div>
    </div>
}



const Modal = (props) =>{
return(
    <Fragment>
        <Backdrop onHideModal = {props.onHideModal}/>
        <Overlay>{props.children}</Overlay>
   
    </Fragment>
)
}
export default Modal