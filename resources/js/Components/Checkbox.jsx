import styled from "styled-components";
const Input =styled.input`
    margin-right: 5px;
`
export default function Checkbox({ className = '', ...props }) {
    return (
        <Input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
