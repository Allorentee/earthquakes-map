import { useCallback, useEffect, useRef, useState } from 'react'

import { Layer, Map, MapLayerMouseEvent, MapRef, Source } from 'react-map-gl'

import { HoverInfo } from '../../components/HoverInfo'
import { heatmapLayer, pulsingDot } from '../../components/Layers'
import { Spinner } from '../../components/Spinner'
import SearchControl from '../../components/controls/SearchControl'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { FOG, INITIAL_VIEW } from '../../constants/map'
import earthQuakes from '../../data/earthQuake.json'
import { mappedEarthQuake } from '../../helpers/mappedData'
import { useOptions } from '../../hooks/useOptions'
import { HovInfo } from '../../interface/map'

export function MapComponent() {
  const earthQuakesData: any = earthQuakes
  const mapRef = useRef<MapRef>()
  const { filters, mapStyle } = useOptions()
  const [hoverInfo, setHoverInfo] = useState<HovInfo>()
  const [data, setData] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)
  const onClick = ({ features }: Partial<MapLayerMouseEvent>) => {
    if (features === undefined) return
    if (features.length > 0) {
      const coord = JSON.parse(features[0]!.properties!.coordinates)
      features.length > 0 && mapRef.current?.flyTo({ center: coord, zoom: 6 })
    }
  }
  const onHover = useCallback(({ features, point }: MapLayerMouseEvent) => {
    const { x, y } = point
    const hoveredFeature = features?.[0]
    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    mappedEarthQuake({
      url: earthQuakesData[filters.time.value][filters.magnitude.value]
    }).then(res => {
      setData(res)
      setIsLoading(false)
    })
  }, [earthQuakesData, filters])

  return (
    <Map
      ref={mapRef as never}
      onLoad={() => mapRef.current!.addImage('pulsing-dot', pulsingDot)}
      onRender={() => mapRef.current?.triggerRepaint()}
      mapboxAccessToken={import.meta.env.VITE_MAP}
      style={{ height: '100vh', width: '100%', cursor: 'pointer' }}
      initialViewState={INITIAL_VIEW}
      interactiveLayerIds={['wave']}
      projection={{ name: 'globe' }}
      mapStyle={mapStyle.value}
      onMouseMove={onHover}
      onClick={onClick}
      fog={FOG}>
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
      <SearchControl position="top-right" marker={false} mapboxAccessToken={import.meta.env.VITE_MAP} />
      <Sidebar />
      {hoverInfo && <HoverInfo hoverInfo={hoverInfo}></HoverInfo>}
    </Map>
  )
}
