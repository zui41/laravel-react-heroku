import React, { useState } from 'react';
import styled from 'styled-components';
import ModalComponent from './ModalComponent'; // Make sure to import your ModalComponent

const RoundButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4caf50;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PostComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
       新しいテーマを投稿
      <RoundButton onClick={openModal}>+</RoundButton>
      {isModalOpen && <ModalComponent onClose={closeModal} />}
    </Container>
  );
};

export default PostComponent;
