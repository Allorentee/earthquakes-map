import { useState, useCallback } from 'react'

export const useToggle = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue)
  const toggle = useCallback(() => setState(!state), [])
  return [state, toggle, setState]
}
