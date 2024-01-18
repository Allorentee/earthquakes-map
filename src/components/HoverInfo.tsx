import { HovInfo } from '../interface/map'

export const HoverInfo = ({ hoverInfo }: { hoverInfo: HovInfo }) => {
  const { feature } = hoverInfo

  return (
    <div
      className="w-xs pointer-events-none absolute z-10 m-2 rounded-md bg-slate-300 p-2 text-xs text-black"
      style={{ left: hoverInfo.x, top: hoverInfo.y }}>
      <div className="text-lg">
        <span className="font-bold text-black">Lugar:</span> {feature.properties.place}
      </div>
      <div className="text-lg">
        <span className="font-bold text-black">Magnitud:</span> {feature.properties.magnitude}
      </div>
    </div>
  )
}
