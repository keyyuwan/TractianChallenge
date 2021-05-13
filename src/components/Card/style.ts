import styled from 'styled-components'

export const Container = styled.div`
    background: white;
    padding: 2rem 1rem;
    border: 2px solid white;
    border-radius: 1rem;
    cursor: pointer;
    opacity: 0.85;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: 0.2s;

    &:hover {
        transform: translateY(-5%);
        opacity: 1;
        border-color: var(--blue-dark);
    }

    h4 {
        margin-top: 0.5rem;
        color: var(--green);

        &.alert {
            color: red;
        }

        &.health {
            color: var(--blue-dark);
        }
    }

    img {
        width: 20rem;
        height: 15rem;
        margin: 0.8rem 0;
        border-radius: 5px;
    }

    span {
        color: var(--green);
    }
`