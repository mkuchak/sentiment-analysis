export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10 sm:p-16 pr-2 sm:pr-4">
      <ul className="first:pt-4 sm:first:pt-8 last:pb-4 space-y-5 w-full h-full border-l-2 border-dashed border-slate-600 before:content-none">
        {children}
      </ul>
    </div>
  )
}
