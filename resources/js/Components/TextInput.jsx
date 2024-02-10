import styled from 'styled-components';
import { forwardRef, useEffect, useRef } from 'react';

// スタイルドコンポーネントで TextInput を定義
const StyledInput = styled.input`
  border-color: #d1d5db; 
  &:focus {
    border-color: #6366f1; 
    ring-color: #6366f1; 
  }
  border-radius: 0.375rem; 
  width: 50%; 
`;

export default forwardRef(function TextInput({ type = 'text', isFocused = false, ...props }, ref) {
    const inputRef = ref ?? useRef();

    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused, inputRef]);

    // StyledInput コンポーネントを使用してレンダリング
    return <StyledInput {...props} type={type} ref={inputRef} />;
});
