import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react'; // useStateを追加
import GroupComponent from '@/Components/Group/GroupComponent';
import ThreadComponent from '@/Components/Thread/ThreadComponent';
import store from '@/Store/store';
import { useLocation } from 'react-router-dom';
import PostComponent from '@/Components/Post/PostComponent';
import PostThreadComponent from '@/Components/Post/PostThread';

const GroupThreadContainer = styled.div`
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

const ThreadContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction:column;
`;

const ThreadContent = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction;row;
    background-color:lightblue;
    align-items: center;
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

function ThreadMain() {
    const location = useLocation();
    const [user, setUser] = useState({}); // useStateを使用
    const [groups , setGroups] = useState([]);
    const [threads , setThreads] = useState([]);
    const [ThreadId , setThreadId] = useState({id:1});
    // Reduxの非同期更新を待つためにuseEffect内でユーザーを更新
    useEffect(() => {
        setUser(store.getState().auth.user);
    }, [store.getState().auth.user]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(ThreadId.id > 0){
                    const response = await axios.post('/api/group/index', store.getState().auth.user);
                    // データをここで取り出すか、別の関数に渡して処理を行います
                    const ThreadResponse = await axios.post('/api/post/index' , ThreadId);
                    setGroups(response.data.id);
                    setThreads(ThreadResponse.data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
      }, []);
    return (
            <ThreadContainer>
                <Header>
                    <ThreadContent>
                        <PostContainer>
                            <PostThreadComponent/>
                        </PostContainer>  
                        <NameContainer>
                            {user.name}
                        </NameContainer>  
                    </ThreadContent>  
                </Header>
                <GroupThreadContainer>
                    <GroupContainer>
                        <GroupComponent groups={groups}/>
                    </GroupContainer>
                    <HomeContainer>
                        <ThreadComponent  threads={threads}/>
                    </HomeContainer>
                </GroupThreadContainer>
            </ThreadContainer>
    );
}

export default ThreadMain;