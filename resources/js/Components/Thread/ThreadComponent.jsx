import React, { useState } from 'react';
import styled from 'styled-components';
import ModalComponent from './ModalComponent';

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
`;

const ThreadCardComponent = ({thread}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedThreadId, setSelectedThreadId] = useState(null);
    const [selectedThreadContent, setSelectedThreadContent] = useState(null);

    // ダミーデータ
    const threadData = [
        { id: 1 , "img":"hogehoge" , "content":"今日は趣味である映画鑑賞に行った"},
        { id: 2 },
        { id: 3 },
        // ... 他のデータ
    ];

    const openModal = (thread) => {
        if (thread && thread.id) {
            setSelectedThreadId(thread.id);
            setSelectedThreadContent(thread.content)
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setSelectedThreadId(null);
        setIsModalOpen(false);
    };

    return (
        <>
           {threadData.map((thread) => (
                <ThreadCardContainer key={thread.id} onClick={() => openModal(thread)}>
                    <CardContainer>
                        Thread {thread.id}
                    </CardContainer>
                </ThreadCardContainer>
            ))}

            {isModalOpen && (
                <ModalComponent onClose={closeModal}>
                    <p>Modal Content for Thread {selectedThreadId}</p>
                    <p>{selectedThreadContent}</p>
                    <button>リアクション</button>
                </ModalComponent>
            )}
        </>
    );
};

export default ThreadCardComponent;
