import { ArrowIcon } from '../../assets/icons/ArrowIcon'
import { useToggle } from '../../hooks/useToggle'
import { Filter } from '../FilterTime'
import { MapTypeSelector } from '../mapType/MapTypeSelector'

export function Sidebar() {
  const { state, toggle } = useToggle(false)

  return (
    <div
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      className="glass sidebarEffect fixed right-[-200px] top-0 flex min-h-screen w-[16.4rem] flex-col items-center pt-12 hover:right-0 ">
      <Filter sidebarState={state} />
      <MapTypeSelector sidebarState={state} />
      <ArrowIcon color="white" sidebarState={state} />
    </div>
  )
}

// before:block before:w-9 before:bg-emerald-400 before:content-['']

