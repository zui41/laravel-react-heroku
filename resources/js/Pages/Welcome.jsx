import styled from 'styled-components';
import { Link, Head } from '@inertiajs/react';
import { useEffect, useState } from 'react'; // useStateを追加
import GroupComponent from '@/Components/Group/GroupComponent';
import ThemeComponent from '@/Components/Theme/ThemeComponent';
import store from '@/Store/store';
import { setAuth } from '@/Store/authSlice';
import { useDispatch } from 'react-redux';
import GroupCardComponent from '@/Components/Group/GroupCardComponent';

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
    overflow-y: auto;
    margin: 0 3%;
`;

const WelcomeContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const WelcomeContent = styled.div`
    width: 100%;
    height: 100%;
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
    height: 15%;
`;

export default function Welcome({ auth }) {
    const dispatch = useDispatch();
    const [user, setUser] = useState(auth.user); // useStateを使用

    useEffect(() => {
        // setAuthアクションをディスパッチ
        dispatch(setAuth({ user: 'satoshi'  ,id:1}));
    }, [dispatch]);

    // Reduxの非同期更新を待つためにuseEffect内でユーザーを更新
    useEffect(() => {
        setUser(store.getState().auth.user);
    }, [store.getState().auth.user]);

    const groupId = 1;

    return (
        <>
            <Head title="Welcome" />
            <WelcomeContainer>
                <WelcomeContent className="sm:justify-center sm:items-center">
                    <Header className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                        {user ? (
                            <WelcomeLink
                            key={user.id}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            href={`/user/${user.id}`}
                        >
                            {user.user}
                        </WelcomeLink>
                            
                        ) : (
                            <>
                                <WelcomeLink
                                    href={route('login')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </WelcomeLink>

                                <WelcomeLink
                                    href={route('register')}
                                    className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </WelcomeLink>
                            </>
                        )}
                    </Header>
                    <GroupThemeContainer>
                        <GroupContainer>
                            <GroupComponent />
                        </GroupContainer>
                        <ThemeContainer>
                            <ThemeComponent groupId={groupId}/>
                        </ThemeContainer>
                    </GroupThemeContainer>
                </WelcomeContent>
            </WelcomeContainer>
        </>
    );
}
