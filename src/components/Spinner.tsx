import styles from '../styles/main.module.css'

export function Spinner() {
  return (
    <div className={styles.modal}>
      <div className={styles.custom_loader}></div>
    </div>
  )
}
