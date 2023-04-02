import styled, { css } from "styled-components";

export const MessageError = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};
    font-size: 10rem;
    text-align: center;
    padding: 2rem;
  `}
`
