import { createContext, ReactNode, useState } from 'react'
import { EARTHQUAKE_TIME } from '../constants/earthQuake'

interface StateContext {
  filters: Filers
  setFilters: any
  earthQuakeData: any
  setEarthQuakeData: any
}
export interface Filers {
  time: string
  magnitude: string
}

export const FiltersContext = createContext<StateContext | undefined>(undefined)

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filers>({
    time: 'MONTH',
    magnitude: 'ALL'
  })

  const [earthQuakeData, setEarthQuakeData] = useState(
    EARTHQUAKE_TIME.MONTH.ALL
  )

  return (
    <FiltersContext.Provider
      value={{ earthQuakeData, setEarthQuakeData, filters, setFilters }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
