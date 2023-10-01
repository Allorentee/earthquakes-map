import { useContext } from 'react'
import { Filers, FiltersContext } from '../context/filters'

export const useFilters = () => {
  const { filters, setFilters, earthQuakeData, setEarthQuakeData } =
    useContext(FiltersContext)

  const changeFilterTime = ({ time }: { time: string }) => {
    setFilters((prevState: Filers) => ({ ...prevState, time }))
  }

  const changeFilterMagnitude = ({ magnitude }: { magnitude: string }) => {
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
