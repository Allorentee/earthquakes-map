import { useState, useCallback } from 'react'
import { Layer, Map, Source } from 'react-map-gl'
import { HoverEvent } from './interface/map'
import { FOG, INITIAL_VIEW, MAP_DARK } from './constants/map'
import { heatmapLayer } from './components/Layers'
import SearchControl from './components/controls/SearchControl'

export const App = () => {
  const [hoverInfo, setHoverInfo] = useState<HoverEvent | undefined>()

  const onHover = useCallback((event: any) => {
    const {
      features,
      point: { x, y }
    } = event
    const hoveredFeature = features && features[0]
    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y })
  }, [])

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAP}
      mapStyle={MAP_DARK}
      initialViewState={INITIAL_VIEW}
      style={{ height: '100vh', width: '100%' }}
      projection={{ name: 'globe' }}
      onMouseMove={onHover}
      interactiveLayerIds={['heatmap']}
      fog={FOG}
    >
      <Source
        type="geojson"
        data={
          'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
        }
      >
        <Layer {...heatmapLayer} id="heatmap"></Layer>
      </Source>

      {hoverInfo && (
        <div
          className="absolute m-2 p-1 bg-slate-800 text-gray-50 max-w-xs text-xs z-10 pointer-events-none ><"
          style={{ left: hoverInfo.x, top: hoverInfo.y }}
        >
          <div>Magnitude: {hoverInfo.feature.properties.mag}</div>
          <div>Date {hoverInfo.feature.properties.time}</div>
          <div>
            Tsunami?: {hoverInfo.feature.properties.tsunami ? 'SI' : 'NO'}
          </div>
        </div>
      )}
      <SearchControl
        position="top-right"
        mapboxAccessToken={import.meta.env.VITE_MAP}
      />
    </Map>
  )
}
