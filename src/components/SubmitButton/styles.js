import styled from "styled-components";

export const Button = styled.button`
    background:	#c41d93;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    display:block;
    width: 100%;
    text-align: center;
    border:none;
    &[disabled]{
        opacity:.3;
    }
`;