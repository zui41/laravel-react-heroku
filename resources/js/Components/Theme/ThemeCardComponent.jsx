import React from 'react';
import styled from 'styled-components';

const ThemeCardContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:100%;
    color:#333;
    border-radius: 3px;
    box-shadow: 20px 6px 20px 0px rgba(0, 0, 0, 0.45);
  
`;

const CardCotainer = styled.div`
    width:100%;
    height:100%;
    padding:5%;
    background-color:white;
`;

const ThemeCardComponent = ({ theme }) => {
    
    const themeId = theme.id;
    return (
        <ThemeCardContainer>
            <CardCotainer>
               {theme.name}
            </CardCotainer>
        </ThemeCardContainer>
    );
}

export default ThemeCardComponent;
