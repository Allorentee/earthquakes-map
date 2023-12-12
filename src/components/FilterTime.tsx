import { useFilters } from '../hooks/useFilters'
import {
  EARTHQUAKE_MAG_FILTER,
  EARTHQUAKE_TIME_FILTER
} from '../constants/earthQuake'

export const Filter = () => {
  const { changeFilterTime, changeFilterMagnitude } = useFilters()

  return (
    <>
      <section>
        <form
          className="absolute top-0 right-0 mt-12 mr-3 flex flex-col"
          role="search"
        >
          <label htmlFor="time"></label>
          <select
            onChange={changeFilterTime}
            className="p-2 pr-16 pl-16 rounded-md"
            name="time"
          >
            {EARTHQUAKE_TIME_FILTER.map((OPT, index) => (
              <option key={index} value={OPT.VALUE}>
                {OPT.LABEL}
              </option>
            ))}
          </select>
          <label htmlFor="mag"></label>
          <select
            onChange={changeFilterMagnitude}
            className="p-2 pr-16 pl-16 rounded-md"
            name="mag"
          >
            {EARTHQUAKE_MAG_FILTER.map((OPT, index) => (
              <option key={index} value={OPT.VALUE}>
                {OPT.LABEL}
              </option>
            ))}
          </select>
        </form>
      </section>
    </>
  )
}
