import styled from "styled-components";


export const Form = styled.form`
    padding: 1rem 0;
    font-family:'Roboto',sans-serif;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px ;
    display: block;
    width: 100%;
    &[disabled]{
        opacity:.3;
    }
`;
export const Title = styled.h2`
    font-size:2.5rem;
    font-weight:500;
    padding: 8px 0;
    text-align: center;

`;

export const Error = styled.span`
    display:flex;
    justify-content:center;
    border-radius: 3px;
    font-size:14px;
    color: #D8000C;
    background:#FFBABA;
    padding:3px 4px;
`