import styled from "styled-components";

export const StyledWrapper = styled.div`
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
`;