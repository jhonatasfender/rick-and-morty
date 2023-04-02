import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      &::before,
      &::after {
        box-sizing: inherit;
      }

      &::-webkit-scrollbar {
        width: 0.4rem;
      }

      &::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 1rem;

        &:hover {
          background: ${theme.colors.backgroundImage};
        }
      }      
    }

    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.background};
    }
  `}
`

export default GlobalStyles
