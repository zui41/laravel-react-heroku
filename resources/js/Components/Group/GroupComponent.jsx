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
    gap: 4%;
    overflow-y: auto; /* スクロールを追加 */
    position: relative;
 `;

 const GroupComponent = ({ groups }) => {
    return (
        <GroupComponentContainer>
            {groups.map((group) => (
                <Link key={group.id} to={{ pathname: `/group/${group.id}`, state: { groupId: group.id } }}>
                    <GroupCardComponent key={group.id} /* 他のプロパティを渡す */ />
                </Link>
            ))}
            <GroupCreateModal />
        </GroupComponentContainer>
    );
}


export default GroupComponent;
