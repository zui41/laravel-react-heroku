import React, { useState } from 'react';
import styled from 'styled-components';
import ModalComponent from './ModalComponent';

const ThreadContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    height: 30%;
    gap: 16px;
    margin-top: 6%;
`;

const ThreadCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    color: #333;
    cursor: pointer;
`;

const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 5%;
    background-color: white;
    color: #333;
    box-shadow: 10px 6px 10px 0px rgba(0, 0, 0, 0.45);
    transition: transform 0.3s ease-in-out; /* Add transition for smooth scaling */

    &:hover {
        transform: scale(1.1); /* Increase size on hover */
    }
`;

const ThreadCardComponent = ({ threads }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedThreadId, setSelectedThreadId] = useState(null);
    const [selectedThreadContent, setSelectedThreadContent] = useState(null);

    const openModal = (thread) => {
        if (thread && thread.id) {
            setSelectedThreadId(thread.id);
            setSelectedThreadContent(thread.content);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setSelectedThreadId(null);
        setIsModalOpen(false);
    };

    return (
        <ThreadContainer>
            {threads.map((thread) => (
                <ThreadCardContainer key={thread.id} onClick={() => openModal(thread)}>
                    <CardContainer>{thread.content}</CardContainer>
                </ThreadCardContainer>
            ))}

            {isModalOpen && (
                <ModalComponent onClose={closeModal}>
                    <p>Modal Content for Thread {selectedThreadId}</p>
                    <p>{selectedThreadContent}</p>
                    <button>リアクション</button>
                </ModalComponent>
            )}
        </ThreadContainer>
    );
};

export default ThreadCardComponent;
