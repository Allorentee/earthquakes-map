import { useFilters } from '../hooks/useFilters'
import {
  EARTHQUAKE_MAG_FILTER,
  EARTHQUAKE_TIME_FILTER
} from '../constants/earthQuake'
import Select from './select/select'

export const Filter = () => {
  const { changeFilterTime, changeFilterMagnitude, filters } = useFilters()

  return (
    <>
      <section>
        <form
          className="absolute top-0 right-0 mt-12 mr-3 flex flex-col"
          role="search"
        >
          <label htmlFor="time"></label>
          <Select
            options={EARTHQUAKE_TIME_FILTER}
            onChange={changeFilterTime}
            selected={EARTHQUAKE_TIME_FILTER[0]}
          ></Select>
          <label htmlFor="mag"></label>
          <Select
            onChange={changeFilterMagnitude}
            options={EARTHQUAKE_MAG_FILTER}
            selected={EARTHQUAKE_TIME_FILTER[0]}
          ></Select>
        </form>
      </section>
    </>
  )
}
