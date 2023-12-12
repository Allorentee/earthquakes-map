import { createContext, ReactNode, useState } from 'react'

export interface Filers {
  time: string
  magnitude: string
}

export const FiltersContext = createContext<any>({})

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filers>({
    time: 'PAST_HOUR',
    magnitude: 'ALL'
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
