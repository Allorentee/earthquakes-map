import { Feature } from '../interface/earthQuakes'
import { detailUrlService } from '../services/api'

export const mappedEarthQuake = async ({ url }: { url: string }) => {
  const data = await detailUrlService(url)
  const mappedData = data.features.map((earthQuake: Feature) => {
    return {
      type: earthQuake.type,
      geometry: earthQuake.geometry,
      properties: {
        magnitude: earthQuake.properties.mag,
        tsunami: earthQuake.properties.tsunami,
        place: earthQuake.properties.place,
        time: earthQuake.properties.time,
        coordinates: {
          lng: earthQuake.geometry.coordinates[0],
          lat: earthQuake.geometry.coordinates[1]
        }
      }
    }
  })
  return {
    type: 'FeatureCollection',
    features: mappedData
  }
}
