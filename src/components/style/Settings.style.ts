import styled from "styled-components";

export const SettingsContainer = styled.div`

  display: flex;
  justify-content: space-between;
  gap: 1rem;
  position: relative;


  .theme-btn{
    &:hover{
      cursor: pointer;
    }
  }
  .settings-btn {
    cursor: pointer;
  }

  .measurement-systems {
    position: absolute;
    top: 100%;
    right: 0;
    border: 1px solid ;
    border-color:${({ theme }) => theme.borders};
    padding: 1rem;
    z-index: 10;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    min-width: 200px;
  }

  .system {
    cursor: pointer;
    padding: 0.25rem 0;
  }

  .system.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;