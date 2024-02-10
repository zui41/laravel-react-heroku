import styled from 'styled-components';
import { Link, Head } from '@inertiajs/react';
import { Route, Routes } from 'react-router-dom';

import GroupComponent from '@/Components/Group/GroupComponent';
import ThemeComponent from '@/Components/Theme/ThemeComponent';
import ThreadComponent from '@/Components/Thread/ThreadComponent';
const GroupThemeContainer = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: row;
`;

const GroupContainer = styled.div`
    width: 10%;
    height: 100vh;
    color: white;
    background-color: #333;
`;

const ThemeContainer = styled.div`
    width: 90%;
    height: 100vh;
    color: white;
    overflow-y: auto; /* スクロールを追加 */
    margin:0 3%;
`;

const WelcomeContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const WelcomeContent = styled.div`
    width:100%;
    height:100%;
    z-index: 1;
`;

const WelcomeLink = styled(Link)`
    font-weight: 600;
    color: #4a5568;
    &:hover {
        color: #2d3748;
    }
`;

const Header = styled.div`
    height:15%;
`
export default function Welcome({ auth }) {
    const groupId = 1;  // You may need to dynamically determine the groupId based on the route

    return (
        <>
            <Head title="Welcome" />
            <WelcomeContainer>
                <WelcomeContent className=" sm:justify-center sm:items-center">
                    <Header className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                        {/* Header content */}
                    </Header>
                    <GroupThemeContainer>
                        <GroupContainer>
                            <GroupComponent />
                        </GroupContainer>
                        <ThemeContainer>
                            <Routes>
                                {/* Static sidebar for GroupComponent */}
                                <Route
                                    path="/group/:groupId/*"
                                    element={<GroupComponent />}
                                />

                                {/* Dynamic main content based on the route */}
                                <Route
                                    index
                                    element={<ThemeComponent groupId={groupId} />}
                                />
                                <Route
                                    path="/theme/:themeId"
                                    element={<ThreadComponent />}
                                />
                            </Routes>
                        </ThemeContainer>
                    </GroupThemeContainer>
                </WelcomeContent>
            </WelcomeContainer>
        </>
    );
}