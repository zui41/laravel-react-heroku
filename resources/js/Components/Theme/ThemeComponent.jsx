import React from 'react';
import ThemeCardComponent from './ThemeCardComponent';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ThemeContainer = styled.div`
    display: grid;
    width: 50%;
    height: 20%;
    margin-top:5%;
    gap:10%;
`;

const ThemeComponent = ({themes}) => {
    return (
        <ThemeContainer>
            {themes.map((theme) => (
                <Link key={theme.id} to={`/theme/${theme.id}`}>
                    <ThemeCardComponent key={theme.id}　theme={theme}/* 他のプロパティを渡す */ />
                </Link>
            ))}
        </ThemeContainer>
    );
}

export default ThemeComponent;
