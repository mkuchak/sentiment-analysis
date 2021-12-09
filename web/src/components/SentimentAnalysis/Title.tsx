export function Title({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center pl-8 sm:pl-12 text-2xl sm:text-3xl font-semibold text-slate-300">
      {children}
    </li>
  )
}
