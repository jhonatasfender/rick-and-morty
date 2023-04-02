import styled, { css } from 'styled-components'

export const Image = styled.img.attrs({ src: '/img/first.jpg' })`
  height: 100vh;
  width: 100%;
`

export const BackgroundRed = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundImage};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `}
`

export const WrapperImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: max(9vw, 3rem);
    font-weight: bold;
    position: absolute;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};
    user-select: none;
  `}
`
