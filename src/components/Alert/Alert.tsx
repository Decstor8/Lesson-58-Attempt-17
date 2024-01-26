import React from 'react';

interface AlertProps {
    type: 'primary' | 'success' | 'danger' | 'warning';
    children: React.ReactNode;
    onDismiss?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
    return (
        <div className={`alert mt-4 alert-${type}`}>
            {children}
            {onDismiss && <button className="btn-close" aria-label="Close" onClick={onDismiss}></button>}
        </div>
    );
};

export default Alert;
