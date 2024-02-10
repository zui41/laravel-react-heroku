import { useEffect , useState} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link,useForm } from '@inertiajs/react';
import styled from 'styled-components';
import axios from 'axios'; // axiosをインポート
import { setAuth } from '@/Store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import egister from '../Pages/Auth/Register';


const StatusMessage = styled.div`
  margin-bottom: 1rem;
  font-weight: 800; 
  font-size: 0.9rem; 
  color: #ffffcc; 
`;

const LabelContainer = styled.label`
  display: block;
  margin-top: 1rem; 
  margin-left: 5px;
`;

const LinkStyled = styled(Link)`
  text-decoration: underline;
  font-size: 0.9rem; 
  color: #909090; 
  &:hover {
    color: black; 
  }
  margin-start: 0.5rem; /* ms-2 */
  padding-right :10px
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const LoginForm = styled.form`
  height: 100%;
`;

// ページコンポーネント
export default function Login({ status, canResetPassword }) {
  const navigate = useNavigate();
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });
  const dispatch = useDispatch(); 
  const [user, setUser] = useState({}); // useStateを使用
  
  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', data);

      if (!response.data) {
        throw new Error('Invalid response format');
      }
      if (response.status !=200){
        throw new Error('Error');
      }  else{
        setUser(response.data);
        dispatch(setAuth(response.data));
        navigate("/home");
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <GuestLayout>
      <Head title="Log in" />
      {status && <StatusMessage>{status}</StatusMessage>}
      <LoginForm onSubmit={submit} id='loginForm'>
        {/* Input for Email */}
        <LabelContainer>
          <InputLabel htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData('email', e.target.value)}
          />
          <InputError message={errors.email} />
        </LabelContainer>

        {/* Input for Password */}
        <LabelContainer>
          <InputLabel htmlFor="password" value="Password" />
          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
          />
          <InputError message={errors.password} />
        </LabelContainer>
        {/* Login and Forgot Password */}
        <ButtonContainer>
          {canResetPassword && (
            <LinkStyled href={route('password.request')}>
              パスワードを忘れてしまいましたか？
            </LinkStyled>
          )}
          <Link href={route('register')} className="font-semibold" >
              <PrimaryButton>新規登録はこちらから</PrimaryButton>
          </Link>
          <PrimaryButton disabled={processing}>Log in</PrimaryButton>
        </ButtonContainer>
      </LoginForm>
    </GuestLayout>
  );
}
