import { Dispatch, SetStateAction } from 'react'

import * as S from './styled'

type PaginationProps = {
  renge: string[]
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export default function Pagination({
  renge,
  page,
  setPage,
}: PaginationProps): JSX.Element {
  const handlePrev = () => {
    setPage((prev) => prev - 1)
  }

  const handleNext = () => {
    setPage((prev) => prev + 1)
  }

  const handleSpecific = (current: string) => {
    if (current !== '...') {
      setPage(Number(current))
    }
  }

  return (
    <S.Wrapper>
      <S.Prev onClick={handlePrev} />
      {renge.map((num, key) => (
        <S.Item
          active={page.toString() === num}
          key={key}
          onClick={() => handleSpecific(num)}
        >
          {num}
        </S.Item>
      ))}
      <S.Next onClick={handleNext} />
    </S.Wrapper>
  )
}
