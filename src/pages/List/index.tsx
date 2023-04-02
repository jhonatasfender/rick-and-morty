import Card from '../../components/Card'
import CardGrid from '../../components/CardGrid'
import Form from '../../components/Form'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import useList from '../../hooks/use-list'
import * as S from './styled'

export default function List(): JSX.Element {
  const {
    register,
    gatewaySubmit,
    data,
    isLoading,
    renge,
    page,
    setPage,
    errors,
  } = useList()

  if (!data || isLoading) return <Loading />

  return (
    <div>
      <Form errors={errors} register={register} gatewaySubmit={gatewaySubmit} />

      {data.results && (
        <>
          <CardGrid>
            {data.results.map((result) => (
              <Card key={result.id} result={result} />
            ))}
          </CardGrid>
          <Pagination renge={renge} page={page} setPage={setPage} />
        </>
      )}

      {data.error && <S.MessageError>{data.error}</S.MessageError>}
    </div>
  )
}
