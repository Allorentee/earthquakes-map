export const EARTHQUAKE_TIME_FILTER = [
  {
    id: crypto.randomUUID(),
    label: 'Ultimas Horas',
    value: 'PAST_HOUR'
  },
  {
    id: crypto.randomUUID(),
    label: 'Últimos dias',
    value: 'PAST_DAY'
  },
  {
    id: crypto.randomUUID(),
    label: 'Última semana',
    value: 'WEEK'
  },
  {
    id: crypto.randomUUID(),
    label: 'Último mes',
    value: 'MONTH'
  }
]

export const EARTHQUAKE_MAG_FILTER = [
  {
    id: crypto.randomUUID(),
    label: 'Todos',
    value: 'ALL'
  },
  {
    id: crypto.randomUUID(),
    label: 'Magnitud 1',
    value: 'MAGNITUDE_1'
  },
  {
    id: crypto.randomUUID(),
    label: 'Magnitud 2',
    value: 'MAGNITUDE_2'
  },
  {
    id: crypto.randomUUID(),
    label: 'Magnitud 3',
    value: 'MAGNITUDE_3'
  }
]
