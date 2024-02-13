import { Option } from '../../components/select/select.types'
import { OptionsState } from '../options'

export function optionsReducer(state: OptionsState, action: OptionsActions): OptionsState {
  const { payload, type } = action
  switch (type) {
    case 'filter-date':
      return { ...state, filters: { ...state.filters, time: payload } }
    case 'filter-magnitude':
      return { ...state, filters: { ...state.filters, magnitude: payload } }
    case 'mapStyle':
      return { ...state, mapStyle: payload }
    case 'toggleSidebar':
      return { ...state, sidebarState: payload }
    default:
      return state
  }
}

export type OptionsActions =
  | OptionsFilterDate
  | OptionsMapStyle
  | OptionsFiterMagnitude
  | OptionsTogggleSidebar

export type OptionsFilterDate = {
  type: 'filter-date'
  payload: Option
}
export type OptionsFiterMagnitude = {
  type: 'filter-magnitude'
  payload: Option
}
export type OptionsMapStyle = {
  type: 'mapStyle'
  payload: Option
}
export type OptionsTogggleSidebar = {
  type: 'toggleSidebar'
  payload: boolean
}

