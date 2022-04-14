import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--gray-900);
`;

export const Title = styled.h1`
  padding: 20px;
`;

export const Description = styled.h1`
  font-weight: bold;
  font-size: 25px;
`;

export const Button = styled.button`
  font-weight: bolder;
  background-color: var(--gray-300);
  border: none;
  padding: 10px;
  border-radius: 3px;

  transition: color 0.5s;

  &:hover {
    color: var(--white);
    background-color: var(--gray-700);
  }
`;

export const RegionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 86%;
  padding: 76px 0px 59px 0px;
`;

export const Region = styled.div`
font-size: 13px;
  padding: 10px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--white);
  margin: 15px 0px;
`;
