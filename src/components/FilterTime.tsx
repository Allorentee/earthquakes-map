import { EARTHQUAKE_MAG_FILTER, EARTHQUAKE_TIME_FILTER } from '../constants/earthQuake'
import { useFilters } from '../hooks/useFilters'
import { Select } from './select/Select'

export const Filter = () => {
  const { changeFilterTime, changeFilterMagnitude, filters } = useFilters()

  return (
    <section>
      <form className="absolute right-0 top-0 mr-[0.60rem] mt-12 flex flex-col" role="search">
        <Select options={EARTHQUAKE_TIME_FILTER} onChange={changeFilterTime} selected={filters.time}></Select>
        <Select
          onChange={changeFilterMagnitude}
          options={EARTHQUAKE_MAG_FILTER}
          selected={filters.magnitude}></Select>
      </form>
    </section>
  )
}
