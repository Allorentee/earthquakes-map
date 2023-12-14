import { useFilters } from '../hooks/useFilters'
import {
  EARTHQUAKE_MAG_FILTER,
  EARTHQUAKE_TIME_FILTER
} from '../constants/earthQuake'
import { Select } from './select/Select'

export const Filter = () => {
  const { changeFilterTime, changeFilterMagnitude, filters } = useFilters()

  return (
    <section>
      <form
        className="absolute top-0 right-0 mt-12 mr-[0.60rem] flex flex-col"
        role="search"
      >
        <Select
          options={EARTHQUAKE_TIME_FILTER}
          onChange={changeFilterTime}
          selected={filters.time}
        ></Select>
        <Select
          onChange={changeFilterMagnitude}
          options={EARTHQUAKE_MAG_FILTER}
          selected={filters.magnitude}
        ></Select>
      </form>
    </section>
  )
}
