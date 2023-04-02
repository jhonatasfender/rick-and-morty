import { useNavigate } from 'react-router-dom'
import { Result } from '../../hooks/use-list/typings'
import * as S from './styled'

type CardProps = {
  result: Result
}

export default function Card({ result }: CardProps): JSX.Element {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/character/${result.id}`)
  }

  return (
    <S.Wrapper onClick={handleClick}>
      <S.Image src={result.image} />

      <S.ContentCard>
        <S.Name>{result.name}</S.Name>

        <S.Tags>
          <S.Tag>{result.species}</S.Tag>
          <S.Tag>{result.gender}</S.Tag>
          <S.Tag>{result.origin.name}</S.Tag>
          {result.type && <S.Tag>{result.type}</S.Tag>}
        </S.Tags>
      </S.ContentCard>
    </S.Wrapper>
  )
}
