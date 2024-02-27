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
      className="glass sidebarEffect fixed -bottom-[92vh] flex min-h-screen w-full flex-col items-center hover:-bottom-96 md:left-[-200px] md:top-0  md:min-h-screen md:w-[16.4rem] md:pt-12 md:hover:left-0 ">
      <Filter sidebarState={sidebarState} />
      <MapTypeSelector sidebarState={sidebarState} />
      <ArrowIcon color="white" sidebarState={sidebarState} />
    </div>
  )
}

