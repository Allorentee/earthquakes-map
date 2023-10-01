export const EARTHQUAKE_TIME = {
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

export const EARTHQUAKE_TIME_FILTER = [
  {
    LABEL: 'Ultimas Horas',
    VALUE: 'PAST_HOUR'
  },
  {
    LABEL: 'Últimos dias',
    VALUE: 'PAST_DAYS'
  },
  {
    LABEL: 'Última semana',
    VALUE: 'WEEK'
  },
  {
    LABEL: 'Último mes',
    VALUE: 'MONTH'
  }
]

export const EARTHQUAKE_MAG_FILTER = [
  {
    LABEL: 'Todos',
    VALUE: 'ALL'
  },
  {
    LABEL: 'Magnitud 1',
    VALUE: 'MAGNITUDE_1'
  },
  {
    LABEL: 'Magnitud 2',
    VALUE: 'MAGNITUDE_2'
  },
  {
    LABEL: 'Magnitud 3',
    VALUE: 'MAGNITUDE_3'
  }
]
