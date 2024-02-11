import React from 'react';
import styled from 'styled-components';
import { Link, Head } from '@inertiajs/react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'; // useStateを追加
import GroupComponent from '@/Components/Group/GroupComponent';
import ThemeComponent from '@/Components/Theme/ThemeComponent';
import ThreadComponent from '@/Components/Thread/ThreadComponent';
import store from '@/Store/store';
import { setAuth } from '@/Store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import PostComponent from '@/Components/Post/PostComponent';

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

const HomeContainer = styled.div`
    width: 80%;
    height: 100vh;
    color: white;
    overflow-y: auto;
    margin: 0 3%;
`;

const ThemeContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const ThemeContent = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
`;


const Header = styled.div`
    display:flex;
    justify-content: right;
    align-items: flex-start;
    height: 15%;
    width:100%;
`;

const PostContainer = styled.div`           
    color: 333;
    width:35%;
`;

const NameContainer = styled.div`
    margin-top:1%;
`;

function ThemeMain() {
    const location = useLocation();
    const [user, setUser] = useState({}); // useStateを使用
    const [groups , setGroups] = useState([]);
    const [themes , setThemes] = useState([]);
    const [groupId , setGroupId] = useState({id:1});
    // Reduxの非同期更新を待つためにuseEffect内でユーザーを更新
    useEffect(() => {
        setUser(store.getState().auth.user);
    }, [store.getState().auth.user]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(groupId.id > 0){
                    const response = await axios.post('/api/group/index', store.getState().auth.user);
                    // データをここで取り出すか、別の関数に渡して処理を行います
                    const themeResponse = await axios.post('/api/theme/index' , groupId);
                    setGroups(response.data.id);
                    setThemes(themeResponse.data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
      }, []);

    return (
            <ThemeContainer>
                <ThemeContent className="sm:justify-center sm:items-center">
                    <Header className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                            <div>

                            </div>
                            <PostContainer>
                                <PostComponent/>
                            </PostContainer>  
                            <NameContainer>
                                {user.name}
                            </NameContainer>    
                    </Header>
                    <GroupThemeContainer>
                        <GroupContainer>
                            <GroupComponent groups={groups}/>
                        </GroupContainer>
                        <HomeContainer>
                            <ThemeComponent  themes={themes}/>
                        </HomeContainer>
                    </GroupThemeContainer>        
                </ThemeContent>
            </ThemeContainer>
    );
}

export default ThemeMain;