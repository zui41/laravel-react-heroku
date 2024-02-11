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
    color: #333;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* ドロップシャドウを追加 */
    width: 300px; /* コンテンツの幅を指定 */

    button {
        background-color: #4caf50;
        color: white;
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }
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
