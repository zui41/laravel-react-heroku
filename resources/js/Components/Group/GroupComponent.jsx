import React from 'react';
import styled from 'styled-components';
import GroupCardComponent from './GroupCardComponent';
import { Link } from 'react-router-dom';
import GroupCreateModal from './GroupModalComponent';

const GroupComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 10% 0;
    gap: 4%;
    overflow-y: auto;
    position: relative;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
        transform: scale(1.3);
        border-radius: 99%;
        /* Add other hover styles as needed */
    }
`;

const GroupComponent = ({ groups }) => {
   
    return (
        <GroupComponentContainer>
            {groups.map((group) => (
                <StyledLink key={group.id} to={{ pathname: `/group/${group.id}`, state: { groupId: group.id } }}>
                    <GroupCardComponent key={group.id} path={group.img_path}/* 他のプロパティを渡す */ />
                </StyledLink>
            ))}
            <GroupCreateModal />
        </GroupComponentContainer>
    );
}

export default GroupComponent;
