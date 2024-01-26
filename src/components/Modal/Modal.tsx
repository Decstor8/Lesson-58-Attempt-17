import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import {ButtonConfig} from "../../types";

interface Props {
    show: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    buttons?: ButtonConfig[];
}

const Modal: React.FC<Props> = ({ show, title, children, onClose, buttons }) => {
    return (
        <>
            {show && <Backdrop show={show} />}
            <div className='modal' style={{ display: show ? "block" : 'none' }}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5'>{title}</h1>
                            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className='modal-body'>
                            {children}
                        </div>
                        <div className="modal-footer">
                            {buttons && buttons.map((button, index) => (
                                <button key={index}
                                        className={`btn btn-${button.type}`}
                                        onClick={button.onClick}>{button.label}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
