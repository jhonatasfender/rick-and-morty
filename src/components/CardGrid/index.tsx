import { ReactNode } from 'react'
import * as S from './styled'

type CardGridProps = {
  children: ReactNode
}

export default function CardGrid({ children }: CardGridProps): JSX.Element {
  return <S.Wrapper>{children}</S.Wrapper>
}
