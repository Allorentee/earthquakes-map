import { FILTER_OPTIONS } from '../constants/earthQuake'
import styles from '../styles/main.module.css'

export const Filter = () => {
  return (
    <>
      <form className={styles.filter}>
        <label>
          <select>
            {FILTER_OPTIONS.map((opt: string) => (
              <>
                <option>{opt}</option>
              </>
            ))}
          </select>
        </label>
      </form>
    </>
  )
}
