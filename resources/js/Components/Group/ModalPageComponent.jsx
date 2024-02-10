import React from 'react';
import styled from 'styled-components';
import FormComponent from './FormComponent'
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // 必要に応じて調整
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  color: black;
`;

export const ModalPageComponent = ({ onClose }) => {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}> {/* モーダルコンテンツのクリックで閉じないように伝播を止める */}
        <CloseButton onClick={onClose}></CloseButton>
        <FormComponent/>
        {/* モーダルの内容 */}
        <p>ここにモーダルの内容が入ります。</p>
      </ModalContent>
    </ModalBackdrop>
  );
};
