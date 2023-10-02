import { useRef, useCallback, useState, useEffect } from 'react'
import { Layer, Map, MapLayerMouseEvent, MapRef, Source } from 'react-map-gl'
import { FOG, INITIAL_VIEW, MAP_DARK } from './constants/map'
import { heatmapLayer, pulsingDot } from './components/Layers'
import { HoverInfo } from './components/HoverInfo'
import { HovInfo } from './interface/map'
import { Filter } from './components/FilterTime'
import { useFilters } from './hooks/useFilters'
import { mappedEarthQuake } from './helpers/mappedData'
import earthQuakes from './data/earthQuake.json'
import SearchControl from './components/controls/SearchControl'
import styles from './styles/main.module.css'

export const App = () => {
  const earthQuakesData: any = earthQuakes
  const mapRef = useRef<MapRef>()
  const { filters } = useFilters()
  const [hoverInfo, setHoverInfo] = useState<HovInfo>()
  const [data, setData] = useState<any>({
    data: earthQuakesData[filters.time][filters.magnitude],
    isLoading: false
  })

  const handleResetZoom = () => mapRef.current?.flyTo(INITIAL_VIEW)
  const onClick = ({ features }: Partial<MapLayerMouseEvent>) => {
    const coord = JSON.parse(features![0].properties!.coordinates)
    features!.length > 0 && mapRef.current?.flyTo({ center: coord, zoom: 6 })
  }
  const onHover = useCallback(({ features, point }: MapLayerMouseEvent) => {
    const { x, y } = point
    const hoveredFeature = features && features[0]
    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y })
  }, [])

  useEffect(() => {
    mappedEarthQuake({
      url: earthQuakesData[filters.time][filters.magnitude]
    }).then(setData)
  }, [earthQuakesData, filters])

  return (
    <>
      <Map
        ref={mapRef as never}
        onLoad={() => mapRef.current!.addImage('pulsing-dot', pulsingDot)}
        onRender={() => mapRef.current?.triggerRepaint()}
        mapboxAccessToken={import.meta.env.VITE_MAP}
        style={{ height: '100vh', width: '100%' }}
        initialViewState={INITIAL_VIEW}
        interactiveLayerIds={['wave']}
        projection={{ name: 'globe' }}
        mapStyle={MAP_DARK}
        onMouseMove={onHover}
        onClick={onClick}
        fog={FOG}
      >
        {/* <Source type="geojson" data={data}>
          <Layer {...pointLayer} id="wave"></Layer>
        </Source> */}
        <Source type="geojson" data={data}>
          <Layer {...heatmapLayer} id="wave"></Layer>
        </Source>
        {hoverInfo && <HoverInfo hoverInfo={hoverInfo}></HoverInfo>}
        <SearchControl
          position="top-right"
          marker={false}
          mapboxAccessToken={import.meta.env.VITE_MAP}
        />
      </Map>
      <img
        src="/images/reset.png"
        className={styles.reset}
        onClick={handleResetZoom}
      ></img>
      <Filter></Filter>
    </>
  )
}
