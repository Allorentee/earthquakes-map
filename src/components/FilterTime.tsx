import { EARTHQUAKE_MAG_FILTER, EARTHQUAKE_TIME_FILTER } from '../constants/earthQuake'
import { useOptions } from '../hooks/useOptions'
import { Select } from './select/Select'

export const Filter = ({ sidebarState }: { sidebarState: boolean }) => {
  const { changeFilterTime, changeFilterMagnitude, filters } = useOptions()

  return (
    <section className={`sidebarEffect ${!sidebarState && 'hidden'}`}>
      <Select options={EARTHQUAKE_TIME_FILTER} onChange={changeFilterTime} selected={filters.time}></Select>
      <Select
        onChange={changeFilterMagnitude}
        options={EARTHQUAKE_MAG_FILTER}
        selected={filters.magnitude}></Select>
    </section>
  )
}
