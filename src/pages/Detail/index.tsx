import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import Loading from '../../components/Loading'
import { Result } from '../../hooks/use-list/typings'
import * as S from './styled'

export default function Detail(): JSX.Element {
  const { id } = useParams()

  const { isLoading, data } = useQuery<Result>(
    'repoData',
    async () =>
      await (
        await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      ).json(),
  )
  const { data: lorem } = useQuery<string>(
    'lorem',
    async () =>
      await (
        await fetch(
          `https://baconipsum.com/api/?type=meat-and-filler&start-with-lorem=1&paras=3&format=text`,
        )
      ).text(),
  )

  if (!data || !lorem || isLoading) return <Loading />

  return (
    <S.Wrapper>
      <S.About>
        <S.Title>{data.name}</S.Title>

        <S.Description>{lorem}</S.Description>
      </S.About>
      <S.Image src={data.image} />
    </S.Wrapper>
  )
}
