import { useMemo } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { Inputs } from '../../hooks/use-list'
import * as S from './styled'

type FormProps = {
  register: UseFormRegister<Inputs>
  errors: FieldErrors<Inputs>
  gatewaySubmit: (
    event?: React.BaseSyntheticEvent<object, any, any>,
  ) => Promise<void>
}

export default function Form({
  gatewaySubmit,
  register,
  errors,
}: FormProps): JSX.Element {
  const propsInput = useMemo(
    () => ({
      required: { value: true, message: 'Este campo é obrigatório' },
      minLength: {
        value: 3,
        message: 'Para pesquisar é necessário ter pelo menos 3 caracteres',
      },
    }),
    [],
  )

  return (
    <S.Wrapper onSubmit={gatewaySubmit}>
      <S.WrapperInput>
        <S.Input {...register('name', propsInput)} />
        {errors.name?.message && <S.Message>{errors.name.message}</S.Message>}
      </S.WrapperInput>
      <S.Button>Pesquisar</S.Button>
    </S.Wrapper>
  )
}
