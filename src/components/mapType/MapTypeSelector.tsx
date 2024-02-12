import { MAP_STYLE_OPTIONS } from '../../constants/map'
import { useFilters } from '../../hooks/useOptions'
import { Select } from '../select/Select'

export function MapTypeSelector() {
  const { mapStyle, onChangeStyle } = useFilters()

  return <Select options={MAP_STYLE_OPTIONS} onChange={onChangeStyle} selected={mapStyle} />
}

