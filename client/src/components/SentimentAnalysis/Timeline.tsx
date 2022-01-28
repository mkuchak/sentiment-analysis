import { classNames } from '../../utils/classNames'

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10 pr-2 sm:p-16 sm:pr-4">
      <ul
        className={classNames(
          'first:pt-4 last:pb-4 space-y-5 w-full h-full sm:first:pt-8',
          'before:content-none border-l-2 border-slate-600 border-dashed'
        )}
      >
        {children}
      </ul>
    </div>
  )
}
