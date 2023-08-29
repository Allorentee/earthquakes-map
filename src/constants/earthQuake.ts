interface EarthquakeData {
  PAST_HOUR: Data
  PAST_DAY: Data
  WEEK: Data
  MONTH: Data
}
interface Data {
  ALL: string
  MAGNITUDE_1: string
  MAGNITUDE_2: string
  MAGNITUDE_4: string
}

export const EARTHQUAKE_TIME: EarthquakeData = {
  PAST_HOUR: {
    ALL: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
    MAGNITUDE_1:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson',
    MAGNITUDE_2:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson',
    MAGNITUDE_4:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson'
  },
  PAST_DAY: {
    ALL: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
    MAGNITUDE_1:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson',
    MAGNITUDE_2:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson',
    MAGNITUDE_4:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson'
  },
  WEEK: {
    ALL: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
    MAGNITUDE_1:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson',
    MAGNITUDE_2:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson',
    MAGNITUDE_4:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'
  },
  MONTH: {
    ALL: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
    MAGNITUDE_1:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson',
    MAGNITUDE_2:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson',
    MAGNITUDE_4:
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson'
  }
}
