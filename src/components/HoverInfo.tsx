import { HovInfo } from '../interface/map'
import styles from '../styles/main.module.css'

export const HoverInfo = ({ hoverInfo }: { hoverInfo: HovInfo }) => {
  return (
    <div
      className={styles.tooltip}
      style={{ left: hoverInfo.x, top: hoverInfo.y }}
    >
      <div>State: </div>
      <div>Median Household Income:</div>
      <div>Percentile:</div>
    </div>
  )
}
