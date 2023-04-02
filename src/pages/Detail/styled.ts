import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src: bg }) => css`
    height: 100%;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
  `}
`

export const About = styled.div`
  padding: 2rem;
  width: 100%;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: max(6vw, 3rem);
    font-weight: bold;
  `}
`

export const Description = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.4rem;
  `}
`
