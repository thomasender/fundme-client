import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #f0f0f0;
        font-family: 'Roboto', sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }

    .avatar {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin-bottom: 12px;
    }

    .contract-data {
        margin-top: 12px;
    }
`;


export const AppFrame = styled.div`
  width: 100%;
  max-width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
    background-color: #000;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #333;
    }
`;

export const Input = styled.input`
    width: 100%;    
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
`;

export const FlexRowCenter = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4px;
`;

export const FlexColCenter = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
`;

export const DataItem = styled.p`
    width: 100%;
    font-size: 1rem;
    margin: 0;
    text-align: start;
`

export const H1 = styled.h1`
    font-size: 2rem;
    margin: 0;
    margin-bottom: 12px;
    text-align: center;
`

export const Paragraph = styled.p`
    font-size: 1rem;
    margin: 0;
    text-align: start;
`

export const ErrorMessage = styled.p`
    color: red;
    font-size: 1rem;
    margin: 0;
    text-align: start;
    padding: 12px;
    border-radius: 5px;
    background-color: #181010;
`

export const FundersList = styled(FlexColCenter)`
    margin-top: 12px;
    padding: 12px;
    border-radius: 5px;
    background-color: #181010;
    color: #fff;
`