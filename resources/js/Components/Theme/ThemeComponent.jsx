import React from 'react';
import ThemeCardComponent from './ThemeCardComponent';
import styled from 'styled-components';

const ThemeContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin-top:5%;
    gap:3%;
`;

const ThemeComponent = (groupId) => {
    const themeData = [
        { id: 1, /* 他のプロパティ */ },
        { id: 2, /* 他のプロパティ */ },
        { id: 3, /* 他のプロパティ */ },
        { id: 4, /* 他のプロパティ */ },
        { id: 5, /* 他のプロパティ */ },
        { id: 6, /* 他のプロパティ */ },
        { id: 7, /* 他のプロパティ */ },
        { id: 8, /* 他のプロパティ */ },
        { id: 9, /* 他のプロパティ */ },
        { id: 10, /* 他のプロパティ */ },
        { id: 11, /* 他のプロパティ */ },
        { id: 12, /* 他のプロパティ */ },
        { id: 13, /* 他のプロパティ */ },
        { id: 14, /* 他のプロパティ */ },
        { id: 15, /* 他のプロパティ */ },
        { id: 16, /* 他のプロパティ */ },
    ];

    return (
        <ThemeContainer>
            {themeData.map((theme) => (
                <ThemeCardComponent key={theme.id}　groupId={groupId} /* 他のプロパティを渡す */ />
            ))}
        </ThemeContainer>
    );
}

export default ThemeComponent;
