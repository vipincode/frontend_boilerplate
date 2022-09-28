import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: tomato;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 30px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: red;
  }
`;
