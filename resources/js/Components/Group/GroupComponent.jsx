import React from 'react';
import styled from 'styled-components';
import GroupCardComponent from './GroupCardComponent';

const GroupComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding:10% 0;
    gap: 3%;
    overflow-y: auto; /* スクロールを追加 */
`;

const GroupComponent = () => {
    // 仮のデータ配列（必要に応じて実際のデータに置き換えてください）
    const groupData = [
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
        <GroupComponentContainer>
            {groupData.map((group) => (
                <GroupCardComponent key={group.id} /* 他のプロパティを渡す */ />
            ))}
        </GroupComponentContainer>
    );
}

export default GroupComponent;
