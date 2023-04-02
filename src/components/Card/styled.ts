import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    border-radius: 0.8rem;
    width: 16rem;
    height: 30rem;
    border: 0.1rem solid ${theme.colors.white};
    cursor: pointer;
  `}
`

export const Image = styled.img`
  min-width: 16rem;
  width: 16rem;
`

export const Name = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.9rem;
    display: block;
    width: 13rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
`

export const ContentCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`

export const Tag = styled.div`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: bold;
    background-color: ${theme.colors.hacienda};
    color: ${theme.colors.white};
    padding: 0.4rem 1rem;
    border-radius: 1rem;
    min-width: 45%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
`
