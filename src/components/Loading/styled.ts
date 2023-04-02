import styled, { css, keyframes } from 'styled-components'

const exec = keyframes`
  100%{
    transform: rotate(1turn)
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 63rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 20rem;
    background: radial-gradient(
          farthest-side,
          ${theme.colors.backgroundLoadingFirst} 90%,
          ${theme.colors.black}
        )
        center/3.2rem 3.2rem,
      radial-gradient(
          farthest-side,
          ${theme.colors.backgroundLoadingSecond} 90%,
          ${theme.colors.black}
        )
        bottom/2.4rem 2.4rem;
    background-repeat: no-repeat;
    animation: ${exec} 2s infinite linear;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 1.6rem;
      height: 1.6rem;
      inset: auto 0 3.2rem;
      margin: auto;
      background: ${theme.colors.backgroundLoadingThird};
      border-radius: 50%;
      transform-origin: 50% calc(100% + 2rem);
      animation: inherit;
      animation-duration: 1s;
    }
  `}
`
