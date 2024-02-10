import React from 'react';
import styled from 'styled-components';

const ThemeCardContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:100%;
    color:#333;
`;

const CardCotainer = styled.div`
    width:100%;
    height:100%;
    padding:5%;
    background-color:white;
`;

const ThemeCardComponent = ({ groupId }) => {
    const id = groupId.groupId // Avoid potential null or undefined error
    
    return (
        <ThemeCardContainer>
            <CardCotainer>
                Theme Title: {id}
            </CardCotainer>
        </ThemeCardContainer>
    );
}

export default ThemeCardComponent;
