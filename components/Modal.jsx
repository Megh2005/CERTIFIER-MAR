"use client";
// Combined Modal Component and Styles
const Modal = ({ isOpen, handleClose, ...props }) => {
    const styles = {
        modalWrapper: {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            width: '100%',
            overflow: 'auto',
            backgroundColor: '#000000c6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            visibility: isOpen ? 'visible' : 'hidden',
            opacity: isOpen ? 1 : 0,
        },
        modalContainer: {
            backgroundColor: '#fff',
            padding: '3rem',
        },
    };

    return (
        <div style={styles.modalWrapper} onClick={handleClose}>
            <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
