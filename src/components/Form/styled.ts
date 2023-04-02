import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  height: 10.5rem;
`

export const Input = styled.input.attrs({ type: 'text' })`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.redOrange};
    border-radius: 0.4rem;
    height: 4rem;
    min-width: 30rem;
    width: 100%;
    padding: 1rem;
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
    font-size: 1.4rem;

    &:focus {
      outline: none;
    }
  `}
`

export const Button = styled.button.attrs({ type: 'submit' })`
  ${({ theme }) => css`
    background-color: ${theme.colors.button};
    border: none;
    border-radius: 0.4rem;
    padding: 1rem 3rem;
    color: ${theme.colors.white};
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    height: 4rem;
  `}
`

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Message = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.redOrange};
    font-size: 1.2rem;
  `}
`
