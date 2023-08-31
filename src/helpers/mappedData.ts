import { EarthQuakes, Feature } from '../interface/earthQuakes'
import { detailUrlService } from '../services/api'

export const mappedEarthQuake = async ({ url }: { url: string }) => {
  const data = await detailUrlService(url)
  const mappedData = data.map((earthQuake: EarthQuakes) => {
    return {
      type: 'FeatureCollection',
      features: earthQuake.features.map((feat: Feature) => {
        return {
          type: feat.type,
          geometry: feat.geometry,
          properties: {
            magnitude: feat.properties.mag,
            place: feat.properties.place,
            time: feat.properties.time
          }
        }
      })
    }
  })
  return mappedData
}
