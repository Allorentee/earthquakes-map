import { useState } from 'react'

export const useField = ({
  type,
  initValue
}: {
  type: string
  initValue: string
}) => {
  const [state, setState] = useState(initValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setState(value)
  }

  return { state, onChange, type }
}
