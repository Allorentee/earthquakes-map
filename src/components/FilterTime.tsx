import { ChangeEvent } from 'react'
import {
  EARTHQUAKE_MAG_FILTER,
  EARTHQUAKE_TIME_FILTER
} from '../constants/earthQuake'
import styles from '../styles/main.module.css'
import { useFilters } from '../hooks/useFilters'

export const Filter = () => {
  const { changeFilterTime } = useFilters()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const time = e.target.value
    changeFilterTime({ time })
  }

  return (
    <>
      <section>
        <form className={styles.filter} role="search">
          <label htmlFor="time"></label>
          <select onChange={handleChange} className={styles.select} name="time">
            {EARTHQUAKE_TIME_FILTER.map((OPT, index) => (
              <>
                <option key={index} value={OPT.VALUE}>
                  {OPT.LABEL}
                </option>
              </>
            ))}
          </select>
          <label htmlFor="mag"></label>
          <select onChange={handleChange} name="mag">
            {EARTHQUAKE_MAG_FILTER.map((OPT, index) => (
              <>
                <option key={index} value={OPT.VALUE}>
                  {OPT.LABEL}
                </option>
              </>
            ))}
          </select>
        </form>
      </section>
    </>
  )
}
