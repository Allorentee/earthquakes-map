import { ReactNode, createContext, useState } from 'react'

import { Option } from '../components/select/select.types'
import { MAP_STYLE_OPTIONS } from '../constants/map'

export interface Filers {
  time: Option
  magnitude: Option
}

export const FiltersContext = createContext<any>({})

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [mapStyle, setMapStyle] = useState(MAP_STYLE_OPTIONS[0])
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
    <FiltersContext.Provider value={{ filters, setFilters, mapStyle, setMapStyle }}>
      {children}
    </FiltersContext.Provider>
  )
}
