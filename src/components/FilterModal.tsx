import styles from '../styles/main.module.css'
import { Filter } from './FilterTime'
import { CloseIcon } from './Icons'

export function FilterModal() {
  return (
    <section className={styles.filter_modal}>
      <CloseIcon></CloseIcon>
      <div style={{ background: 'blue', width: '100%', height: '20rem' }}>
        <Filter></Filter>
      </div>
    </section>
  )
}
