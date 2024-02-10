import React from 'react';
import styled from 'styled-components';
import GroupCardComponent from './GroupCardComponent';
import { Link } from 'react-router-dom';
import  GroupCreateModal  from './GroupModalComponent';

const GroupComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding:10% 0;
    gap: 3%;
    overflow-y: auto; /* スクロールを追加 */
    position: relative;
`;

const GroupComponent = () => {
    // 仮のデータ配列（必要に応じて実際のデータに置き換えてください）
    const groupData = [
        { id: 1, /* 他のプロパティ */ },
    ];

    return (
        <GroupComponentContainer>
        {groupData.map((group) => (
            <Link key={group.id} to={`/group/${group.id}`}>
                <GroupCardComponent key={group.id} /* 他のプロパティを渡す */ />
            </Link>
        ))}
        <GroupCreateModal/>
    </GroupComponentContainer>
    );
}

export default GroupComponent;
