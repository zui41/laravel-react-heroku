import React from 'react';
import styled from 'styled-components';

const GroupCardContainer = styled.div`
    background-color: gray;
    border-radius: 50%; /* 80%ではなく50%に変更 */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin:0 10%; 

`;

const GroupCardComponent = () => {
    return (
        <GroupCardContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
            </svg>
        </GroupCardContainer>
    );
}

export default GroupCardComponent;
