export function ArrowIcon({ color, sidebarState }: Readonly<{ color: string; sidebarState: boolean }>) {
  return (
    <div
      className={`sidebarEffect absolute -rotate-90 pt-2 md:right-3 md:top-1/4 md:rotate-0 md:pt-0 ${sidebarState && 'hidden'}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={color}
        className="h-9 w-9">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  )
}

