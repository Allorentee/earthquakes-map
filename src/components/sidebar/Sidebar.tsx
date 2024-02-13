import { ArrowIcon } from '../../assets/icons/ArrowIcon'
import { useOptions } from '../../hooks/useOptions'
import { Filter } from '../FilterTime'
import { MapTypeSelector } from '../mapType/MapTypeSelector'

export function Sidebar() {
  const { toggleSidebar, sidebarState } = useOptions()

  return (
    <div
      onMouseEnter={() => toggleSidebar(true)}
      onMouseLeave={() => toggleSidebar(false)}
      className="glass sidebarEffect fixed left-[-200px] top-0 flex min-h-screen w-[16.4rem] flex-col items-center pt-12 hover:left-0 ">
      <Filter sidebarState={sidebarState} />
      <MapTypeSelector sidebarState={sidebarState} />
      <ArrowIcon color="white" sidebarState={sidebarState} />
    </div>
  )
}

// before:block before:w-9 before:bg-emerald-400 before:content-['']

