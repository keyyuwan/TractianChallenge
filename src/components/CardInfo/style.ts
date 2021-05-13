import styled from 'styled-components'

export const BackImg = styled.img`
  position: absolute;
  top: 3rem;
  left: 7rem;

  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.85);
  }
`

export const Container = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 12rem;
  max-width: 1120px;
  margin: auto;
  background: white;
  padding: 3rem;

  position: relative;

  section {
    margin-top: 3rem;

    h4 {
      margin-top: 1rem;
      font-size: 1.3rem;
    }

    p {
      margin-top: 0.7rem;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }

  .info-section {
    h2 {
      font-size: 3rem;
    }

    h4 {
      color: var(--green);

      &.alert {
        color: red;
      }

      &.health {
        color: var(--blue-dark);
      }
    }

    .specifications, .metrics {

        border: 1px solid var(--blue-dark);
        border-radius: 5px;
        text-align: center;
        margin-top: 2rem;
        padding: 1rem;
        opacity: 0.8;
        transform: scale(0.9);

        transition: 0.2s;

        &:hover {
          transform: scale(1.2);
          opacity: 1;
        }

        h4 {
            text-decoration: underline;
            margin: 0;
        }
    }
  }

  .metrics {
      strong {
          margin-left: 0.5rem;
          white-space: nowrap;

          &.date {
            text-transform: capitalize;
          }
      }
  }

  .image-section {
    img {
      width: 30rem;
      height: 25rem;
      border-radius: 5px;
    }
  }
`;