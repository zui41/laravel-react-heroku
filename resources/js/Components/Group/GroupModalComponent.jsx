import React , { useState } from 'react';
import styled from 'styled-components'
import { ModalPageComponent } from './ModalPageComponent';

const ThreeDotsVertical = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: flex-end; 
    height: 100%; 
    width: 100%; 
`
const Icon = styled.svg`
    position: absolute; 
    bottom: 0;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px
    width: 20px;
    height: 20px;
    color: white;
    cursor: pointer;
`

const GroupModalComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
        };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <ThreeDotsVertical>
        <Icon onClick={openModal} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>    
        </Icon>
        {isModalOpen && <ModalPageComponent onClose={closeModal} />}
    </ThreeDotsVertical>
  )
}

export default GroupModalComponent