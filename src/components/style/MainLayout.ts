import styled from "styled-components";

export const MainContent = styled.div`
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;