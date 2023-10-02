import { useContext, ChangeEvent } from 'react'
import { Filers, FiltersContext } from '../context/filters'

export const useFilters = () => {
  const { filters, setFilters, earthQuakeData, setEarthQuakeData } =
    useContext(FiltersContext)

  const changeFilterTime = (e: ChangeEvent<HTMLSelectElement>) => {
    const time = e.target.value
    setFilters((prevState: Filers) => ({ ...prevState, time }))
  }

  const changeFilterMagnitude = (e: ChangeEvent<HTMLSelectElement>) => {
    const magnitude = e.target.value
    setFilters((prevState: Filers) => ({ ...prevState, magnitude }))
  }

  return {
    earthQuakeData,
    setEarthQuakeData,
    filters,
    changeFilterTime,
    changeFilterMagnitude
  }
}
