import styled from "styled-components";


export const NavContainer  = styled.div`
      background: ${({ theme }) => theme.card};
      color: ${({ theme }) => theme.text};
display: flex;
justify-content: space-between;
padding: 2rem;
align-items: center;
height: 15%;
border: 1px solid;
border-color:${({ theme }) => theme.borders};
border-radius: 1rem;
margin-bottom: 1rem;

  @media screen and (max-width: 745px) {
    width:100%;
    flex-direction: column;
    margin-bottom: 5rem;
    height: fit-content;
  }
`


export const StyledSearch = styled.div`
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
position: relative; /* <- anchor for absolutely positioned results */

.search-results-wrapper {
  

  position: absolute;
  top: calc(100% + 0.5rem); /* places it just below the form */
  left: 0;
  right: 0;
  z-index: 10;
}

.search-results {
  background: ${({ theme }) => theme.background};
  border: 1px solid;
  border-color:${({ theme }) => theme.borders};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
}

.result {
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background:rgb(74, 71, 71);
  }
}
`;

export const StyledSearchForm = styled.form`


    input {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      border-color:${({ theme }) => theme.borders};
      padding: 0.5rem;
      font-size: 1rem;
      flex: 1;
    }

    button {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      padding: 0.5rem;
      border: none;
      cursor: pointer;
    }
`

