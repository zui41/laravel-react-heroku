import styled, { css } from 'styled-components';

// スタイルドコンポーネントで PrimaryButton を定義
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem; 
  background-color: #1f2937; 
  border: 1px solid transparent; 
  border-radius: 0.375rem;
  font-weight: 600; 
  font-size: 0.75rem; 
  text-transform: uppercase; 
  letter-spacing: 0.05em; 
  color: white; 
  cursor: pointer;
  transition: background-color 0.15s ease-in-out; 

  &:hover {
    background-color: #374151; 
  }

  &:focus {
    background-color: #374151;
    outline: none; 
    box-shadow: 0 0 0 2px #6366f1; 

  &:active {
    background-color: #111827; 
  }

  /* disabled 状態のスタイリング */
  ${props => props.disabled && css`
    opacity: 0.25;
    cursor: not-allowed;
  `}
`;

// コンポーネントの使用
export default function PrimaryButton({ disabled, children, ...props }) {
  return (
    <StyledButton disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
}
