import styled from "styled-components";

export const ForecastContainer = styled.div`
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
  display: flex;
  overflow-x: auto;
  gap: 0.2rem;
  padding: 1rem ;
 



  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.background};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  /* Firefox support */
  scrollbar-color: ${({ theme }) => theme.card};
  scrollbar-width: thin;
`;
