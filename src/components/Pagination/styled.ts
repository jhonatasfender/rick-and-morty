import styled, { css } from 'styled-components'

import { NavigateBefore, NavigateNext } from '@styled-icons/material-rounded'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    gap: 1rem;
    width: 100%;
    list-style-type: none;
  `}
`

type ItemProps = {
  active:boolean
}

export const Item = styled.li<ItemProps>`
  ${({ theme,active }) => css`
    --size: ${active? '5rem':'4rem'};
  
    background-color: ${theme.colors.button};
    font-size: 1.8rem;
    font-weight: bold;
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    text-align: center;
    line-height: var(--size);
    cursor: pointer;
    user-select: none;
  `}
`

export const Prev = styled(NavigateBefore)`
  ${({ theme }) => css`
    width: 8rem;
    fill: ${theme.colors.button};
    cursor: pointer;
  `}
`

export const Next = styled(NavigateNext)`
  ${({ theme }) => css`
    width: 8rem;
    fill: ${theme.colors.button};
    cursor: pointer;
  `}
`
