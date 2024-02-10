import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import styled from 'styled-components';

// スタイルドコンポーネント
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
    color: black; /* hover:text-gray-900 */
  }
  margin-start: 0.5rem; /* ms-2 */
  padding-right :10px
`;

const PassRem =styled.span`
  mergin-left: 10px;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
  
`;

const LoginForm = styled.form`
  height: 100%;
`;

// ページコンポーネント
export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && <StatusMessage>{status}</StatusMessage>}

      <LoginForm onSubmit={submit}>
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

        {/* Checkbox for Remember Me */}
        <LabelContainer as="div">
          <Checkbox
            name="remember"
            checked={data.remember}
            onChange={(e) => setData('remember', e.target.checked)}
          />
          <PassRem>パスワードを記憶する。</PassRem>
        </LabelContainer>
        
        {/* Login and Forgot Password */}
        <ButtonContainer>
          {canResetPassword && (
            <LinkStyled href={route('password.request')}>
              パスワードを忘れてしまいましたか？
            </LinkStyled>
          )}
          <PrimaryButton disabled={processing}>Log in</PrimaryButton>
        </ButtonContainer>
      </LoginForm>
    </GuestLayout>
  );
}
