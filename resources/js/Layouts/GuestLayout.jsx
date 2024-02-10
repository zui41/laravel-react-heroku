import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import styled from 'styled-components';
import LoginLogo from '../Components/tenshi.png';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#ccffcc;
    align-items:center;
    height:100%;
    width: 100%;
    justify-content: center;
`
const LoginForm = styled.div`
    flex-direction:column;
    display:flex;
    align-items:center;
    color:red;
    margin-top: 20px;
    width: 50%;
    height: 100vh;
`
const Logo = styled.img`
    width: 120px;
    height: 100px;
`
const FormBack = styled.div`
    width:full;
    pedding:20px;
    background:white;

`
const FormCard = styled.div`
    width: 100%;
    padding: 1.5rem; 
    margin-top: 1.5rem; 
    background-color: white; 
    box-shadow: 4px 5px 17px -5px #777777;
    border-radius: 10px;
    overflow: hidden; 
`

export default function Guest({ children }) {
    return (
        <Container>
            <LoginForm>
                <Link href="/">
                    <Logo src= {LoginLogo} />
                </Link>
            <FormCard >
                {children}
            </FormCard>
            </LoginForm>
        </Container>
    );
}
