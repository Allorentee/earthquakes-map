import styles from '../styles/main.module.css'
import { Filter } from './FilterTime'
export function FilterModal() {
  return (
    <>
      <section className={styles.modal}>
        <Filter></Filter>
      </section>
    </>
  )
}
