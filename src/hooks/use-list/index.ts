import {
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from 'react-hook-form'
import { useQuery } from 'react-query'

import usePagination from '../use-pagination'
import { Character } from './typings'

export type Inputs = {
  name: string
  status: 'alive' | 'dead' | 'unknown'
  species: string
  type: string
  gender: 'female' | 'male' | 'genderless' | 'unknown'
}

type Out = {
  register: UseFormRegister<Inputs>
  isLoading: boolean
  data?: Character
  renge: string[]
  page: number
  errors: FieldErrors<Inputs>
  setPage: Dispatch<SetStateAction<number>>
  gatewaySubmit: (event?: BaseSyntheticEvent<object, any, any>) => Promise<void>
}

export default function useList(): Out {
  const [form, setValueForm] = useState<Inputs>()
  const [page, setPage] = useState(1)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const { isLoading, data, refetch } = useQuery<Character>(
    ['character', form],
    async ({ queryKey: [, valueForm] }) => {
      const params: Record<string, string> = {
        ...(valueForm || {}),
        page: page.toString(),
      }

      const url = new URL(`https://rickandmortyapi.com/api/character`)
      url.search = new URLSearchParams(params).toString()

      return await (await fetch(url)).json()
    },
  )

  useEffect(() => {
    refetch()
  }, [page, refetch])

  const renge = usePagination(page, data?.info?.pages || 1)

  const onSubmit: SubmitHandler<Inputs> = (valueForm) => {
    setValueForm(valueForm)
  }

  const gatewaySubmit = handleSubmit(onSubmit)

  return {
    register,
    gatewaySubmit,
    data,
    isLoading,
    renge,
    setPage,
    page,
    errors,
  }
}
