export function Spinner() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-12 w-12 animate-spin">
        <div className="absolute inset-0 grid place-items-center rounded-full border-4 border-solid border-black border-transparent border-t-[#efeff4]"></div>
        <div className="animate-spin-reverse animate-duration-3s absolute inset-0 grid place-items-center rounded-full border-4 border-solid border-black border-transparent border-t-[#efeff4]"></div>
      </div>
    </div>
  )
}
