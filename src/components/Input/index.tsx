import React, {
  useCallback,
  useEffect,
  useState,
  InputHTMLAttributes
} from 'react'
import { useFormContext, Controller } from 'react-hook-form'

import * as S from './styles'
import { chooseMask } from 'utils'
import Loading from 'components/Loading'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  required?: boolean
  type: string
  isLoading?: boolean
  search?: () => void
  mask?: 'phone' | 'cpf' | 'date' | 'zipcode'
}

export default function Input({
  label,
  name,
  required,
  type,
  mask,
  search,
  isLoading,
  ...rest
}: IProps) {
  const {
    control,
    getValues,
    formState: { errors }
  } = useFormContext()

  const [focus, setFocus] = useState(false)

  const handleFocus = useCallback(() => {
    const values = getValues()

    if (values[name]) {
      setFocus(true)
      return
    }

    setFocus(false)
  }, [getValues, name])

  useEffect(() => {
    handleFocus()
  }, [handleFocus])

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFocus(false)
    }

    return e.target.value
  }

  const handleKeyUp = (evt: React.FormEvent<HTMLInputElement>) => {
    if (mask) {
      return chooseMask({ evt, mask })
    }
  }

  return (
    <S.Content isFocused={focus} hasError={!!errors[name]}>
      <S.Label htmlFor={name}>{label}</S.Label>

      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field }) => {
          return (
            <S.Input
              {...field}
              {...rest}
              id={name}
              type={type}
              placeholder={label}
              value={field.value || ''}
              onBlur={handleBlur}
              onFocus={() => setFocus(true)}
              onKeyUp={handleKeyUp}
            />
          )
        }}
      />

      {!!search && (
        <S.Search onClick={search}>
          {!isLoading ? (
            <img src="/static/img/search.svg" alt="Icone lupa" />
          ) : (
            <Loading box={24} size={18} border={2} />
          )}
        </S.Search>
      )}

      {errors[name] && <S.Error>{errors[name].message}</S.Error>}
    </S.Content>
  )
}
