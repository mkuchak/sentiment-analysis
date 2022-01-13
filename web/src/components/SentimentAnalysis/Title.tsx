import { classNames } from '../../utils/classNames'

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <li
      className={classNames(
        'flex items-center pl-8 text-2xl font-semibold sm:pl-12 sm:text-3xl',
        'text-slate-300'
      )}
    >
      {children}
    </li>
  )
}
