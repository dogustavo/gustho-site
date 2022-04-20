import React, {
  useCallback,
  useEffect,
  useState,
  InputHTMLAttributes
} from 'react'
import { useFormContext, Controller } from 'react-hook-form'

import * as S from './styles'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  required?: boolean
  type: string
}

export default function Input({ label, name, required, type }: IProps) {
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

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    return evt
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) setFocus(false)

    return e.target.value
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
              id={name}
              type={type}
              placeholder={label}
              value={field.value || ''}
              onChange={(e) => field.onChange(handleChange(e))}
              onBlur={(e) => handleBlur(e)}
              onFocus={() => setFocus(true)}
            />
          )
        }}
      />

      {errors[name] && <S.Error>{errors[name].message}</S.Error>}
    </S.Content>
  )
}
