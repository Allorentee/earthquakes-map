import { useRef, useCallback, useState, useEffect } from 'react'
import { Layer, Map, MapLayerMouseEvent, MapRef, Source } from 'react-map-gl'
import { useFilters } from '../hooks/useFilters'
import { HovInfo } from '../interface/map'
import { useResize } from '../hooks/useResize'
import { FOG, INITIAL_VIEW, MAP_DARK } from '../constants/map'
import { heatmapLayer, pulsingDot } from '../components/Layers'
import { Spinner } from '../components/Spinner'
import SearchControl from '../components/controls/SearchControl'
import { Filter } from '../components/FilterTime'
import { HoverInfo } from '../components/HoverInfo'
import { mappedEarthQuake } from '../helpers/mappedData'
import earthQuakes from '../data/earthQuake.json'
import styles from '../styles/main.module.css'
import { FilterIcon } from '../components/Icons'

export const MapComponent = () => {
  const earthQuakesData: any = earthQuakes
  const mapRef = useRef<MapRef>()
  const { filters } = useFilters()
  const [hoverInfo, setHoverInfo] = useState<HovInfo>()
  const [data, setData] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)
  const { windowWidth } = useResize()

  const handleResetZoom = () => mapRef.current?.flyTo(INITIAL_VIEW)
  const onClick = ({ features }: Partial<MapLayerMouseEvent>) => {
    if (features!.length > 0) {
      const coord = JSON.parse(features![0]!.properties!.coordinates)
      features!.length > 0 && mapRef.current?.flyTo({ center: coord, zoom: 6 })
    }
    return
  }
  const onHover = useCallback(({ features, point }: MapLayerMouseEvent) => {
    const { x, y } = point
    const hoveredFeature = features && features[0]
    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    mappedEarthQuake({
      url: earthQuakesData[filters.time][filters.magnitude]
    }).then((res) => {
      setData(res)
      setIsLoading(false)
    })
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
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          <Source type="geojson" data={data}>
            <Layer {...heatmapLayer} id="wave"></Layer>
          </Source>
        )}
        {windowWidth < 637 ? (
          <div className={styles.filterIcon__wrapper}>
            <FilterIcon></FilterIcon>
          </div>
        ) : (
          <div>
            <SearchControl
              position="top-right"
              marker={false}
              mapboxAccessToken={import.meta.env.VITE_MAP}
            />
            <Filter></Filter>
          </div>
        )}
        {hoverInfo && <HoverInfo hoverInfo={hoverInfo}></HoverInfo>}
      </Map>
      <img
        src="/images/reset.png"
        className={styles.reset}
        onClick={handleResetZoom}
      ></img>
    </>
  )
}
