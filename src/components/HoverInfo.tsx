import { HovInfo } from '../interface/map'

export const HoverInfo = ({ hoverInfo }: { hoverInfo: HovInfo }) => {
  const { feature } = hoverInfo

  return (
    <div
      className="w-xs glass-intensity rounded-xs pointer-events-none absolute z-10 m-2 rounded-md p-2 text-xs text-white"
      style={{ left: hoverInfo.x, top: hoverInfo.y }}>
      <div className="text-lg">
        <span className="font-bold text-white">LUGAR:</span> {feature.properties.place}
      </div>
      <div className="text-lg">
        <span className="font-bold text-white">MAGNITUD:</span> {feature.properties.magnitude}
      </div>
    </div>
  )
}
