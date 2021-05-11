import styled from 'styled-components'

export const Title = styled.h1`
    text-align: center;
    color: var(--blue-dark);
    font-size: 3rem;
    margin-bottom: 3rem;
    text-decoration: underline;
`

export const Container = styled.div`
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(3, 1fr);
    gap: 2rem;
`