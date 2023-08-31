import { ChangeEvent, useState } from 'react'
import { EARTHQUAKE_TIME_FILTER } from '../constants/earthQuake'
import styles from '../styles/main.module.css'

export const Filter = () => {
  const [filterTime, setFilterTime] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterTime(e.target.value)
  }

  return (
    <>
      <form className={styles.filter}>
        <label>
          <select onChange={handleChange} className={styles.select}>
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
