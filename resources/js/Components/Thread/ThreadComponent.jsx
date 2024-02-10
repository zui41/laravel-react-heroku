import React from 'react';
import ThreadCardComponent from './ThreadCardComponent';
import styled from 'styled-components';

const ThreadContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 3つの列、各列のサイズは1fr（均等な割合） */
    width: 100%;
    height: 100%;
    margin-top:5%;
    gap:3%;
`;

const ThreadComponent = () => {
    const ThreadData = [
        { id: 1, /* 他のプロパティ */ },
        { id: 2, /* 他のプロパティ */ },
        { id: 3, /* 他のプロパティ */ },
        { id: 4, /* 他のプロパティ */ },
        { id: 5, /* 他のプロパティ */ },
        { id: 6, /* 他のプロパティ */ },
        { id: 7, /* 他のプロパティ */ },
        { id: 8, /* 他のプロパティ */ },
        { id: 1, /* 他のプロパティ */ },
        { id: 2, /* 他のプロパティ */ },
        { id: 3, /* 他のプロパティ */ },
        { id: 4, /* 他のプロパティ */ },
        { id: 5, /* 他のプロパティ */ },
        { id: 6, /* 他のプロパティ */ },
        { id: 7, /* 他のプロパティ */ },
        { id: 8, /* 他のプロパティ */ },
    ];

    return (
        <ThreadContainer>
            {ThreadData.map((Thread) => (
                <ThreadCardComponent key={Thread.id} /* 他のプロパティを渡す */ />
            ))}
        </ThreadContainer>
    );
}

export default ThreadComponent;
