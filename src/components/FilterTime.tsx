import { EARTHQUAKE_MAG_FILTER, EARTHQUAKE_TIME_FILTER } from '../constants/earthQuake'
import { useFilters } from '../hooks/useOptions'
import { Select } from './select/Select'

export const Filter = () => {
  const { changeFilterTime, changeFilterMagnitude, filters } = useFilters()

  return (
    <section>
      <Select options={EARTHQUAKE_TIME_FILTER} onChange={changeFilterTime} selected={filters.time}></Select>
      <Select
        onChange={changeFilterMagnitude}
        options={EARTHQUAKE_MAG_FILTER}
        selected={filters.magnitude}></Select>
    </section>
  )
}
