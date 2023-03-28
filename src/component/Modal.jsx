'use strict'
import '../assets/modal.css';
import close from '../assets/img/close.svg';


import PropTypes from 'prop-types';

const Modal = ({ title, text, color, bgColor, icon_color }) => {
    return (
        <div className="container_modal">
            <div style={{ color, backgroundColor: bgColor }} className='modal'>
                <div className="modal__close">
                    <a href="#">
                        <span className="icon-close" style={{ color: icon_color }}>
                            <i class="fa-solid fa-xmark"></i>
                        </span>
                    </a>
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
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    bgColor: PropTypes.string
}
export default Modal;