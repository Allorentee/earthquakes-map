import { ReactNode, createContext } from 'react'

import { useToggle } from '../hooks/useToggle'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, toggleModal] = useToggle(false)

  return <GlobalContext.Provider value={{ modal, toggleModal }}>{children}</GlobalContext.Provider>
}
