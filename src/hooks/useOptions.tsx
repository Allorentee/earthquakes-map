import { useContext } from 'react'

import { Option } from '../components/select/select.types'
import { FiltersContext } from '../context/options'

export const useFilters = () => {
  const { filters, mapStyle, dispatch } = useContext(FiltersContext)

  const changeFilterTime = (selected: Option) => {
    console.log({ selected })
    dispatch({ type: 'filter-date', payload: selected })
  }

  const onChangeStyle = (option: Option) => {
    dispatch({ type: 'mapStyle', payload: option })
  }

  const changeFilterMagnitude = (selected: Option) => {
    dispatch({ type: 'filter-magnitude', payload: selected })
  }

  return {
    onChangeStyle,
    filters,
    mapStyle,
    changeFilterTime,
    changeFilterMagnitude
  }
}
