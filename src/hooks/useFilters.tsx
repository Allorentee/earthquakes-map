import { useContext } from 'react'
import { Filers, FiltersContext } from '../context/filters'
import { Option } from '../components/select/select.types'

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const changeFilterTime = (selected: Option) => {
    setFilters((prevState: Filers) => ({ ...prevState, time: selected }))
  }

  const changeFilterMagnitude = (selected: Option) => {
    setFilters((prevState: Filers) => ({ ...prevState, magnitude: selected }))
  }

  return {
    filters,
    changeFilterTime,
    changeFilterMagnitude
  }
}
