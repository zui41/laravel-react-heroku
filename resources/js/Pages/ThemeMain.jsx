import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react'; // useStateを追加
import GroupComponent from '@/Components/Group/GroupComponent';
import ThemeComponent from '@/Components/Theme/ThemeComponent';
import store from '@/Store/store';
import { useLocation } from 'react-router-dom';
import PostThemeComponent from '@/Components/Post/PostComponent';

const GroupThemeContainer = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: row;
`;

const GroupContainer = styled.div`
    width: 10%;
    height: 100%;
    color: white;
    background-color: #333;
`;

const HomeContainer = styled.div`
    width: 90%;
    height: 100%;
    color: white;
    overflow-y: auto;
    margin: 0 3%;
`;

const ThemeContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction:column;
`;

const ThemeContent = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction;row;
    background-color:lightblue;
    align-items: center;
    justify-content: space-around;
    box-shadow: 10px 6px 10px 0px rgba(0, 0, 0, 0.45);
 
`;


const Header = styled.div`
    display:flex;
    justify-content: right;
    align-items: flex-start;
    height: 7%;
    width:100%;
`;

const PostContainer = styled.div`           
    color:#333;
    width:35%;
`;

const NameContainer = styled.div`
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
        <>
            <ThemeContainer>
                <Header>
                    <ThemeContent>
                        <PostContainer>
                            <PostThemeComponent/>
                        </PostContainer>  
                        <NameContainer>
                            {user.name}
                        </NameContainer>  
                    </ThemeContent>  
                </Header>
                <GroupThemeContainer>
                    <GroupContainer>
                        <GroupComponent groups={groups}/>
                    </GroupContainer>
                    <HomeContainer>
                        <ThemeComponent  themes={themes}/>
                    </HomeContainer>
                </GroupThemeContainer>        
            </ThemeContainer>
        </>
    );
}

export default ThemeMain;