import { Filter } from './FilterTime'
import { CloseIcon } from './Icons'

export function FilterModal() {
  return (
    <section className="fixed w-3/4 h-96 bg-red-700 flex justify-center items-center z-10">
      <CloseIcon></CloseIcon>
      <div style={{ background: 'blue', width: '100%', height: '20rem' }}>
        <Filter></Filter>
      </div>
    </section>
  )
}
