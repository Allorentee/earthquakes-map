import { Layer, Map, MapRef, Source } from 'react-map-gl'
import { useRef } from 'react'
import { FOG, INITIAL_VIEW, MAP_DARK } from './constants/map'
import { pointLayer, pulsingDot } from './components/Layers'
import SearchControl from './components/controls/SearchControl'
import { EARTHQUAKE_TIME } from './constants/earthQuake'

export const App = () => {
  const mapRef = useRef<MapRef>()
  return (
    <Map
      ref={mapRef as never}
      mapboxAccessToken={import.meta.env.VITE_MAP}
      initialViewState={INITIAL_VIEW}
      mapStyle={MAP_DARK}
      style={{ height: '100vh', width: '100%' }}
      projection={{ name: 'globe' }}
      fog={FOG}
      onRender={() => {
        mapRef.current!.addImage('pulsing-dot', pulsingDot)
        mapRef.current!.triggerRepaint()
      }}
    >
      <Source type="geojson" data={EARTHQUAKE_TIME.PAST_DAY.MAGNITUDE_1}>
        <Layer {...pointLayer} id="wave"></Layer>
      </Source>

      <SearchControl
        position="top-right"
        mapboxAccessToken={import.meta.env.VITE_MAP}
      />
    </Map>
  )
}
