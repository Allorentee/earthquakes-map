import { createContext, ReactNode, useState } from 'react'
import { EARTHQUAKE_TIME } from '../constants/earthQuake'

// interface StateContext {
//   filters: Filers
//   setFilters: React.Dispatch<React.SetStateAction<''>>
//   earthQuakeData: FilterData
//   setEarthQuakeData: React.Dispatch<React.SetStateAction<''>>
// }
export interface Filers {
  time: string
  magnitude: string
}

export const FiltersContext = createContext<any>({})

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filers>({
    time: 'PAST_HOUR',
    magnitude: EARTHQUAKE_TIME.MONTH.MAGNITUDE_4
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
