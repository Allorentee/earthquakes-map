import { useCallback, useContext } from 'react'

import { Option } from '../components/select/select.types'
import { Filers, FiltersContext } from '../context/filters'

export const useFilters = () => {
  const { filters, setFilters, mapStyle, setMapStyle } = useContext(FiltersContext)

  const changeFilterTime = (selected: Option) => {
    setFilters((prevState: Filers) => ({ ...prevState, time: selected }))
  }

  const onChangeStyle = useCallback((option: Option) => {
    setMapStyle(option)
  }, [])

  const changeFilterMagnitude = (selected: Option) => {
    setFilters((prevState: Filers) => ({ ...prevState, magnitude: selected }))
  }

  return {
    mapStyle,
    onChangeStyle,
    filters,
    changeFilterTime,
    changeFilterMagnitude
  }
}
