import styled from "styled-components";


export const StyledCurrentWeather = styled.div`
background: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.text};
display: flex;
justify-content: center;
width: 100%;
height: fit-content;
  gap: 1rem;

  @media screen and (max-width: 745px) {
    flex-direction: column;
  }

`

interface WidgetProps{
  $width?:string;
  $height?:string;
  $padding?:string;
  $fontScale?:number;
}

export const StyledBasicWidget = styled.div<WidgetProps>`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: ${({ $padding }) => $padding || "1rem"};
  border: 1px solid  ${({ theme }) => theme.borders};
  border-radius: 1rem;
  width: ${({ $width }) => $width || "15%"};
  height: ${({ $height }) => $height || "auto"};
  
  
  h1 {
    font-size: calc(3rem * ${({ $fontScale }) => $fontScale || 1});
  }

  h4 {
    font-size: calc(1.1rem * ${({ $fontScale }) => $fontScale || 1});
  }

  h3 {
    margin-top: 1rem;
    font-size: calc(1.5rem * ${({ $fontScale }) => $fontScale || 1});
  }
  @media screen and (max-width: 745px) {
    width:100%;
  }
`

export const StyledExtraWidgets = styled.ul`
&.list-group {
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
    width: 60%;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.borders};
    border-radius: 1rem;

    .list-group-item {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      border-color: ${({ theme }) => theme.borders};
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      font-weight: 500;

      i {
        margin-right: 0.5rem;
        color: ${({ theme }) => theme.borders};
      }
    }
    @media screen and (max-width: 745px) {
    width:100%;
  }
  }

`