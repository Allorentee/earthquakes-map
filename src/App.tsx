import { useRef, useCallback, useState, useEffect } from 'react'
import { Layer, Map, MapLayerMouseEvent, MapRef, Source } from 'react-map-gl'
import { FOG, INITIAL_VIEW, MAP_DARK } from './constants/map'
import { heatmapLayer, pointLayer, pulsingDot } from './components/Layers'
import { EARTHQUAKE_TIME } from './constants/earthQuake'
import SearchControl from './components/controls/SearchControl'
import { HoverInfo } from './components/HoverInfo'
import { HovInfo } from './interface/map'
import { Filter } from './components/FilterTime'
import styles from './styles/main.module.css'
import { FilterMagnitude } from './components/FilterMagnitude'
import { mappedEarthQuake } from './helpers/mappedData'

export const App = () => {
  const mapRef = useRef<MapRef>()
  const [hoverInfo, setHoverInfo] = useState<HovInfo>()

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

  const [data, setData] = useState<any>()

  useEffect(() => {
    mappedEarthQuake({
      url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
    }).then(setData)
  }, [])

  return (
    <>
      <Map
        ref={mapRef as never}
        onLoad={() => mapRef.current!.addImage('pulsing-dot', pulsingDot)}
        onRender={() => mapRef.current!.triggerRepaint()}
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
        <Source type="geojson" data={data}>
          <Layer {...pointLayer} id="wave"></Layer>
        </Source>
        <Source type="geojson" data={EARTHQUAKE_TIME.PAST_DAY.ALL.VALUE}>
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
      <FilterMagnitude></FilterMagnitude>
    </>
  )
}
