import styled from "styled-components";

interface Props{
    $justify?: string;
    $align?: string;
    $gap?:string;
    $height?:string;
    $overflow?:string;
    $dir?:string;
    $width?:string;
}

export const Flex = styled.div<Props>`
background: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text};
display: flex;
justify-content: ${(p) => p.$justify || "flex-start"};
align-items: ${(p) => p.$align || "stretch"};
gap: ${(p) => p.$gap || "0"};
overflow: ${(p) => p.$overflow || "auto"};
height: ${(p) => p.$height || "auto"};
flex-direction:  ${(p) => p.$dir || "row"};
width: ${(p) => p.$width || "auto"};
`