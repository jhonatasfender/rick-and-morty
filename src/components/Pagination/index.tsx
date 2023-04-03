import { Dispatch, SetStateAction } from 'react'

import * as S from './styled'

type PaginationProps = {
  renge: string[]
  page: number
  total?: number
  setPage: Dispatch<SetStateAction<number>>
}

export default function Pagination({
  renge,
  page,
  setPage,
  total,
}: PaginationProps): JSX.Element {
  const handlePrev = () => {
    setPage((prev) => (prev <= 1 ? prev : prev - 1))
  }

  const handleNext = () => {
    setPage((prev) => (total === prev ? prev : prev + 1))
  }

  const handleSpecific = (current: string) => {
    if (current !== '...') {
      setPage(Number(current))
    }
  }

  return (
    <S.Wrapper aria-label="Pagination Navigation">
      <S.Prev onClick={handlePrev} aria-hidden="false" />
      {renge.map((num, key) => (
        <S.Item
          active={page.toString() === num}
          key={key}
          onClick={() => handleSpecific(num)}
        >
          {num}
        </S.Item>
      ))}
      <S.Next onClick={handleNext} aria-hidden="false" />
    </S.Wrapper>
  )
}
