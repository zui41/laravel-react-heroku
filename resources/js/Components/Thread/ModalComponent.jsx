// ModalComponent.jsx
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    color:#333;
`;

const ModalComponent = ({ onClose, children }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <button onClick={onClose}>Close</button>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default ModalComponent;
