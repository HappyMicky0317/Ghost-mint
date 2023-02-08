import styled from "styled-components";

export const Page = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Error = styled.div`
    color: red;
    font-size: 12px;
`

export const Container = styled.div``

export const LinkContainer = styled.div`
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    a {
        text-decoration: none;
        color: black;
        padding: 0 15px;
    }

    @media screen and (max-width: 992px) {
        display: none;
    }
`;