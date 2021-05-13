import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  max-width: 1120px;
  margin: auto;
  background: white;
  padding: 3rem;

  section {
    margin-top: 3rem;

    h4 {
      margin-top: 1.5rem;
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
        h4 {
            text-decoration: underline;
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