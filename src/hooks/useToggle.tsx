import { useCallback, useState } from 'react'

export const useToggle = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue)
  const toggle = useCallback(() => setState(!state), [state])
  return { state, toggle, setState }
}
