export function Spinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-12 h-12 animate-spin">
        <div className="absolute inset-0 grid place-items-center border-4 border-transparent border-solid rounded-full border-black border-t-[#efeff4]"></div>
        <div className="absolute inset-0 grid place-items-center border-4 border-transparent border-solid rounded-full border-black border-t-[#efeff4] animate-spin-reverse animate-duration-3s"></div>
      </div>
    </div>
  )
}
