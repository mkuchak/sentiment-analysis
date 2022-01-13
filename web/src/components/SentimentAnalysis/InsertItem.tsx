import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import { useAnalysis } from '../../hooks/useAnalysis'
import { classNames } from '../../utils/classNames'

export function InsertItem() {
  const [text, setText] = useState('')
  const { addAnalysis } = useAnalysis()

  const handleAnalysis = useCallback(
    async (event: React.FormEvent | null = null) => {
      if (event && event.type === 'submit') {
        event.preventDefault()
      }

      if (text.trim().length === 0) {
        alert('Digite algo para analisar')
        return
      }

      addAnalysis(text)
      setText('')
    },
    [addAnalysis, text]
  )

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault()

        handleAnalysis()
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [handleAnalysis])

  return (
    <li className="p-4 sm:mr-10">
      <span
        className={classNames(
          'flex absolute justify-center items-center pb-0.5 -mt-1.5 -ml-12',
          'w-16 h-16 text-3xl rounded-full border-8',
          'text-slate-600 bg-slate-800 border-slate-900'
        )}
      >
        <Image src="/predict.png" alt="Insert" width={34} height={34} />
      </span>
      <div className="flex items-center space-x-2">
        <input
          className={classNames(
            'flex flex-col px-4 ml-6 space-y-6 w-full rounded-2xl sm:ml-8',
            'py-[0.7rem] bg-slate-900 border-2 border-slate-600',
            'focus:border-sky-400 outline-sky-400 focus:outline'
          )}
          placeholder="Digite algo aqui..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          onClick={handleAnalysis}
          className={classNames(
            'px-3 h-12 text-white rounded-xl duration-300 transform',
            'bg-sky-600 hover:bg-sky-500'
          )}
        >
          Analisar
        </button>
      </div>
    </li>
  )
}
