import { useContext } from 'react'
import { Filers, FiltersContext } from '../context/filters'
import { Option } from '../components/select/select'

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const changeFilterTime = (selected: Option) => {
    const time = selected.value
    setFilters((prevState: Filers) => ({ ...prevState, time }))
  }

  const changeFilterMagnitude = (selected: Option) => {
    const magnitude = selected.value
    setFilters((prevState: Filers) => ({ ...prevState, magnitude }))
  }

  return {
    filters,
    changeFilterTime,
    changeFilterMagnitude
  }
}
