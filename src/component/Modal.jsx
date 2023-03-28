'use strict'
import '../assets/modal.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import close from '../assets/img/close.svg';

const Modal = ({ open, onClose, title, text, color, bgColor, icon_color }) => {
    if (!open) return null;

    return (
        <div className="container_modal">
            <div style={{ color, backgroundColor: bgColor }} className='modal'>
                <div className="modal__close">
                    <div onClick={onClose} >
                        <span className="icon-close" style={{ color: icon_color }}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                </div>
                <div className="modal__title">
                    <h2>{title}</h2>
                </div>
                <div className="modal__text">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
// propType
Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string
}
export default Modal;