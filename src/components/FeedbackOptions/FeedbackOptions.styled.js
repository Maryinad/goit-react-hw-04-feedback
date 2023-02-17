import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Btn = styled.button`
  padding: 20px 30px;
  font-size: 32px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f97f51;
  color: white;
  font-weight: 700;
  &: hover {
    background-color: #1b9cfc;
  }
`;
