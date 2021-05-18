import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  margin: 3rem auto;
  font-family: 'PT sans', sans-serif;
  padding: 2.5rem 0.8rem;
  box-shadow: 0 0 5px black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-around;
  color: #000B0D;
  background: #bed2d8;
  }
  `}
`;

export default { Container };