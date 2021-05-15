import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 3rem auto 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--blue-dark);
        text-decoration: underline;
        font-size: 3rem;
    } 

    .user-card {
        margin-top: 3rem;
        background: white;
        border-radius: 3px;
        border: 1px solid var(--blue-dark);
        padding: 3rem;
        width: 70%;
    }
`