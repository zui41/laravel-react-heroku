import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Import axios

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
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    padding: 8px;
    margin-bottom: 16px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
`;

const ModalComponent = ({ onClose }) => {
  const [themeName, setThemeName] = useState(''); // State for themeName

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure you use the correct field name in your backend
      const response = await axios.post('/api/theme/store', {
        group_id: 1,
        name: themeName,
      });

      // Handle the response as needed
      console.log(response.data);

      // Close the modal after successful submission
      onClose();
    } catch (error) {
      // Handle errors
      console.error(error);
    } finally {
      // Reset the form state or perform any cleanup
      setThemeName('');
    }
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="exampleInput">新しいテーマ:</label>
          <input
            type="text"
            id="exampleInput"
            placeholder="新しいテーマ"
            value={themeName}
            onChange={(e) => setThemeName(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </Form>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ModalComponent;
