/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

import MapboxGeocoder, { GeocoderOptions } from '@mapbox/mapbox-gl-geocoder'
import { ControlPosition, Marker, useControl } from 'react-map-gl'

import { es } from '../../locales/locales'

type GeocoderControlProps = Omit<GeocoderOptions, 'accessToken' | 'mapboxgl' | 'marker'> & {
  mapboxAccessToken: string
  marker?: unknown
  position: ControlPosition
  onLoading?: any
  onResults?: any
  onResult?: any
  onError?: any
}

/* eslint-disable complexity,max-statements */
export default function SearchControl(props: GeocoderControlProps) {
  const [marker, setMarker] = useState<any>(null)

  const geocoder = useControl<MapboxGeocoder>(
    () => {
      const ctrl = new MapboxGeocoder({
        ...props,
        marker: false,
        accessToken: props.mapboxAccessToken
      })
      ctrl.on('loading', props.onLoading)
      ctrl.on('results', props.onResults)
      ctrl.on('result', (evt: any) => {
        props.onResult(evt)

        const { result } = evt
        const location =
          result && (result.center || (result.geometry?.type === 'Point' && result.geometry.coordinates))
        if (location && props.marker) {
          setMarker(<Marker {...props.marker} longitude={location[0]} latitude={location[1]} />)
        } else {
          setMarker(null)
        }
      })
      ctrl.on('error', props.onError)
      return ctrl
    },
    {
      position: props.position
    }
  )

  const updateGeocoderProperty = (property: any, value: any) => {
    const getterMethod = `get${property.charAt(0).toUpperCase()}${property.slice(1)}`
    const setterMethod = `set${property.charAt(0).toUpperCase()}${property.slice(1)}`

    if ((geocoder as any).map && (geocoder as any)[getterMethod]() !== value && value !== undefined) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      geocoder[setterMethod](value)
    }
  }

  if ((geocoder as any).map) {
    updateGeocoderProperty('Proximity', props.proximity)
    updateGeocoderProperty('RenderFunction', props.render)
    updateGeocoderProperty('Language', props.language)
    updateGeocoderProperty('Zoom', props.zoom)
    updateGeocoderProperty('FlyTo', props.flyTo)
    updateGeocoderProperty('Placeholder', props.placeholder)
    updateGeocoderProperty('Countries', props.countries)
    updateGeocoderProperty('Types', props.types)
    updateGeocoderProperty('MinLength', props.minLength)
    updateGeocoderProperty('Limit', props.limit)
    updateGeocoderProperty('Filter', props.filter)
    updateGeocoderProperty('Origin', props.origin)
  }

  return marker
}

const noop = () => {}

SearchControl.defaultProps = {
  marker: true,
  onLoading: noop,
  onResults: noop,
  onResult: noop,
  onError: noop,
  placeholder: es['common.search']
}
