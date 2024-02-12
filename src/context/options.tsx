import { ReactNode, createContext, useReducer } from 'react'

import { Option } from '../components/select/select.types'
import { MAP_STYLE_OPTIONS } from '../constants/map'
import { OptionsActions, optionsReducer } from './reducer/options.reducer'

export interface Filers {
  time: Option
  magnitude: Option
}
export interface OptionsState {
  filters: Filers
  mapStyle: Option
  dispatch: (action: OptionsActions) => void
}

const INITIAL_STATE: OptionsState = {
  filters: {
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
  },
  mapStyle: MAP_STYLE_OPTIONS[0],
  dispatch: function (): void {
    throw new Error('Function not implemented.')
  }
}

export const FiltersContext = createContext<OptionsState>(INITIAL_STATE)

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [options, dispatch] = useReducer(optionsReducer, INITIAL_STATE)

  return <FiltersContext.Provider value={{ ...options, dispatch }}>{children}</FiltersContext.Provider>
}
