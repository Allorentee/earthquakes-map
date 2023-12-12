import { createContext, ReactNode, useState } from 'react'
import { Option } from '../components/select/select.types'

export interface Filers {
  time: Option
  magnitude: Option
}

export const FiltersContext = createContext<any>({})

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filers>({
    time: {
      id: crypto.randomUUID(),
      label: 'Último mes',
      value: 'MONTH'
    },
    magnitude: {
      id: crypto.randomUUID(),
      label: 'Todos',
      value: 'ALL'
    }
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
