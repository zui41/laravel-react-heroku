import React from 'react';
import ThemeCardComponent from './ThemeCardComponent';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ThemeContainer = styled.div`
    display: grid;
    width: 50%;
    height: 20%;
    margin-top: 5%;
    gap: 10%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
        /* Add your hover styles here */
        transform: scale(1.2);
        /* For example, scaling the element on hover */
    }
`;

const ThemeComponent = ({ themes }) => {
    return (
        <ThemeContainer>
            {themes.map((theme) => (
                <StyledLink key={theme.id} to={`/theme/${theme.id}`}>
                    <ThemeCardComponent key={theme.id} theme={theme} /* 他のプロパティを渡す */ />
                </StyledLink>
            ))}
        </ThemeContainer>
    );
}

export default ThemeComponent;
