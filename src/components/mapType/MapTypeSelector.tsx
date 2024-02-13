import { MAP_STYLE_OPTIONS } from '../../constants/map'
import { useOptions } from '../../hooks/useOptions'
import { Select } from '../select/Select'

export function MapTypeSelector({ sidebarState }: Readonly<{ sidebarState: boolean }>) {
  const { mapStyle, onChangeStyle } = useOptions()

  return (
    <div className={`sidebarEffect ${!sidebarState && 'hidden'}`}>
      <Select options={MAP_STYLE_OPTIONS} onChange={onChangeStyle} selected={mapStyle} />
    </div>
  )
}

