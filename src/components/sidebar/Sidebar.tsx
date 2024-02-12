import { Filter } from '../FilterTime'
import SearchControl from '../controls/SearchControl'
import { MapTypeSelector } from '../mapType/MapTypeSelector'

export function Sidebar() {
  return (
    <div className="glass fixed right-0 top-0 flex min-h-screen w-[16.4rem] flex-col items-center pt-12">
      <SearchControl position="top-right" marker={false} mapboxAccessToken={import.meta.env.VITE_MAP} />
      <Filter />
      <MapTypeSelector />
    </div>
  )
}

