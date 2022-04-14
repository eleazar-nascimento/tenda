import styled from "styled-components";
// import Link from 'next/link';

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


export const SelectContainer = styled.div`
  padding: 20px;
`;

export const Select = styled.select`
  width: 146px;
  height: 35px;
  background: var(--white);
  color: gray;
  padding-left: 5px;
  font-size: 20px;
  border: none;
  border-radius: 2px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Option = styled.option`
  color: black;
  background: var(--white);
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
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

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--white);
  margin: 15px 0px;
`;

