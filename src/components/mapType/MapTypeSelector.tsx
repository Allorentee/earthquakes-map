import { MAP_STYLE_OPTIONS } from '../../constants/map'
import { useFilters } from '../../hooks/useFilters'
import { Select } from '../select/Select'

export function MapTypeSelector() {
  const { mapStyle, onChangeStyle } = useFilters()

  return (
    <section className="absolute right-0 top-0 mr-[0.60rem] mt-[8.5rem] flex flex-col">
      <Select options={MAP_STYLE_OPTIONS} onChange={onChangeStyle} selected={mapStyle} />
    </section>
  )
}

