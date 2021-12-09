import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import { useAnalysis } from '../../hooks/useAnalysis'

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
      <span className="flex absolute justify-center items-center pb-0.5 -mt-1.5 -ml-12 w-16 h-16 text-3xl rounded-full border-8 border-slate-900 bg-slate-800 text-slate-600">
        <Image src="/predict.png" alt="Insert" width={34} height={34} />
      </span>
      <div className="flex items-center space-x-2">
        <input
          className="flex flex-col px-4 ml-6 sm:ml-8 space-y-6 w-full rounded-2xl border-2 py-[0.7rem] bg-slate-900 border-slate-600 focus:outline focus:border-sky-400 outline-sky-400"
          placeholder="Digite algo aqui..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          onClick={handleAnalysis}
          className="px-3 h-12 text-white rounded-xl duration-300 transform bg-sky-600 hover:bg-sky-500"
        >
          Analisar
        </button>
      </div>
    </li>
  )
}
