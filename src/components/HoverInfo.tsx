import { HovInfo } from '../interface/map'

export const HoverInfo = ({ hoverInfo }: { hoverInfo: HovInfo }) => {
  const { feature } = hoverInfo

  return (
    <div
      className="absolute m-2 p-2 bg-slate-300 text-black w-xs text-xs z-10 pointer-events-none rounded-md"
      style={{ left: hoverInfo.x, top: hoverInfo.y }}
    >
      <div className="text-lg">
        <span className="text-black font-bold">Lugar:</span>{' '}
        {feature.properties.place}
      </div>
      <div className="text-lg">
        <span className="text-black font-bold">Magnitud:</span>{' '}
        {feature.properties.magnitude}
      </div>
    </div>
  )
}
