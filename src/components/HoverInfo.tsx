import { HovInfo } from '../interface/map'
import styles from '../styles/main.module.css'

export const HoverInfo = ({ hoverInfo }: { hoverInfo: HovInfo }) => {
  const { feature } = hoverInfo

  return (
    <div
      className={styles.tooltip}
      style={{ left: hoverInfo.x, top: hoverInfo.y }}
    >
      <div>Lugar: {feature.properties.place}</div>
      <div>Magnitud: {feature.properties.magnitude}</div>
    </div>
  )
}
