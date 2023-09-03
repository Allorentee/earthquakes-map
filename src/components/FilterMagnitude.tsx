import { ChangeEvent, useState } from 'react'
import { EARTHQUAKE_TIME_FILTER } from '../constants/earthQuake'
import styles from '../styles/main.module.css'

export const FilterMagnitude = () => {
  const [_filterMag, setFilterMag] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterMag(e.target.value)
  }

  return (
    <>
      <form className={styles['filter-magnitude']}>
        <label>
          <select onChange={handleChange}>
            {EARTHQUAKE_TIME_FILTER.map((OPT) => (
              <>
                <option key={OPT.id} value={OPT.VALUE}>
                  {OPT.LABEL}
                </option>
              </>
            ))}
          </select>
        </label>
      </form>
    </>
  )
}
