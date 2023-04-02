import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

type WrapperProps = {
  fixed: boolean
}

export const Wrapper = styled.nav<WrapperProps>`
  ${({ theme, fixed }) => css`
    display: flex;
    justify-content: center;
    position: ${fixed ? 'fixed' : 'inherit'};
    width: 100%;
    height: 9rem;
    padding: 3rem;
    background-color: ${theme.colors.backgroundHeader};
    z-index: ${theme.layers.menu};
  `}
`

export const Menu = styled.ul`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
    font-size: 2.9rem;
    font-weight: bold;
    list-style-type: none;
    gap: 8rem;
  `}
`

type ItemMeuProps = {
  active?: boolean
}

export const ItemMeu = styled.li<ItemMeuProps>`
  ${({ active, theme }) => css`
    user-select: none;
    cursor: pointer;

    ${active &&
    css`
      &::after {
        content: '';
        background-color: ${theme.colors.redOrange};
        display: block;
        width: calc(100% + 1rem);
        margin-left: -0.5rem;
        height: 1rem;
        border-radius: 0.4rem;
      }
    `}
  `}
`

export const LinkWrapper = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-decoration: none;
  `}
`
