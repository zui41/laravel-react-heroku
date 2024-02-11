import React, { useState , useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    color: #333;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 500px;
`;

const LabelInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    label {
        margin-bottom: 8px;
        font-weight: bold;
    }

    input,
    select {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        margin-bottom: 16px;
    }

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10%;

  button {
    background-color: #4caf50;
    color: white;
    padding: 8px 50px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: block;
  }

  button:hover {
    background-color: #45a049;
  }
`;


const FormComponent = ({onClose}) => {
    const [groupName, setGroupName] = useState('');
    const [groupImage, setGroupImage] = useState(null);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [users , setUsers] = useState([]);
    const [modalVisible, setModalVisible] = useState(true);


    const handleClose = () => {
      // Close the modal by updating the state
      setModalVisible(false);
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const formData = new FormData();
          formData.append('name', groupName); // Make sure you use the correct field name
          formData.append('img', groupImage); // Make sure you use the correct field name
          formData.append('userId', selectedUsers.map((user) => user.id));
  
          const response = await axios.post('/api/group/store', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
  
          // Handle the response as needed
          console.log(response.data);
      } catch (error) {
          // Handle errors
          console.error(error);
      } finally {
          // Any cleanup or additional logic after the request
          setGroupName('');
          setGroupImage(null);
          setSelectedUsers([]);
      }
  };

    const handleImageChange = (e) => {
        setGroupImage(e.target.files[0]);
    };

    useEffect(() => {
      const fetchData = async () => {
          try {
             const response = await axios.get('/api/user/getAll');
             setUsers(response.data);
          } catch (error) {
              console.error(error);
          }
      }
      fetchData();
    }, []);

    
    return (
        <FormContainer onSubmit={handleSubmit}>
            <ModalContent>
                <LabelInput>
                    <label htmlFor="groupImage">グループ画像:</label>
                    <input
                        type="file"
                        id="groupImage"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </LabelInput>

                <LabelInput>
                    <label htmlFor="groupName">グループ名:</label>
                    <input
                        type="text"
                        id="groupName"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        required
                    />
                </LabelInput>

                <LabelInput>
                    <label htmlFor="inviteUser">ユーザー一覧:</label>
                    <select
                        id="inviteUser"
                        multiple
                        value={selectedUsers.map((user) => user.id)}
                        onChange={(e) => {
                            const selectedUserIds = Array.from(e.target.selectedOptions, (option) => Number(option.value));
                            const selectedUsers = users.filter((user) => selectedUserIds.includes(user.id));
                            setSelectedUsers(selectedUsers);
                        }}
                    >
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </LabelInput>

                <ButtonContainer>
                  
                  <button type="button" className="btn btn-secondary" onClick={onClose}>
                            閉じる
                  </button>
                  
                  <button type="submit" className="btn btn-success">
                    作成
                  </button>

                </ButtonContainer>

            </ModalContent>
        </FormContainer>
    );
};

export default FormComponent;
