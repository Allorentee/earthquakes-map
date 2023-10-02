import styles from '../styles/main.module.css'
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
        <form className={styles.filter} role="search">
          <label htmlFor="time"></label>
          <select
            onChange={changeFilterTime}
            className={styles.select}
            name="time"
          >
            {EARTHQUAKE_TIME_FILTER.map((OPT, index) => (
              <option key={index} value={OPT.VALUE}>
                {OPT.LABEL}
              </option>
            ))}
          </select>
          <label htmlFor="mag"></label>
          <select onChange={changeFilterMagnitude} name="mag">
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
