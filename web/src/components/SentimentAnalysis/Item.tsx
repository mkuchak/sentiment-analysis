import Image from 'next/image'
import { useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import ReactTooltip from 'react-tooltip'

import { useAnalysis } from '../../hooks/useAnalysis'

interface AnalysisProps {
  id: string;
  analysis: {
    text: string;
    date: string;
    probabilities: {
      negative: number;
      neutral: number;
      positive: number;
    };
    sentiment: 'negative' | 'neutral' | 'positive';
    confidence: number;
  };
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
const formatHour = (date: string) => {
  return new Date(date).toLocaleTimeString('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
  })
}

export function Item({ id, analysis }: AnalysisProps) {
  const { text, date, probabilities, sentiment } = analysis
  const { removeAnalysis } = useAnalysis()

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <li className="p-4 pr-4 sm:pr-12">
      <span className="flex absolute justify-center items-center pt-0.5 -mt-5 -ml-12 w-16 h-16 rounded-full border-8 border-slate-900 bg-slate-800 text-slate-600">
        <Image
          src={`/${sentiment}.png`}
          alt={sentiment}
          width={34}
          height={34}
        />
      </span>
      <div className="flex flex-col ml-5 sm:ml-8 space-y-4 w-auto">
        <div className="pl-3 text-slate-300">
          Sentimento{' '}
          <span className="font-semibold">
            {sentiment === 'positive'
              ? 'positivo'
              : sentiment === 'negative'
              ? 'negativo'
              : sentiment === 'neutral'
              ? 'neutro'
              : ''}
          </span>
          ; texto analisado em{' '}
          <span className="font-semibold">{formatDate(date)}</span> às{' '}
          <span className="font-semibold">{formatHour(date)}</span>:
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex flex-col p-4 space-y-2 rounded-2xl border shadow-md border-slate-600 text-slate-400"
        >
          <div className="flex justify-between">
            <div>{text}</div>
            <div className="-m-1.5 ml-2 hover:brightness-200 duration-300 transform min-w-[1.625rem] h-[1.625rem]">
              <button
                className={isHovering || isMobile ? 'block' : 'hidden'}
                onClick={() => removeAnalysis(id)}
              >
                <Image src="/delete.svg" alt="delete" width={26} height={26} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center space-x-1">
            {Object.entries(probabilities)
              .reverse()
              .map(([key, value]) => (
                <div
                  key={key}
                  data-tip
                  data-for={`${key}-${id}`}
                  className="flex items-center py-1 pr-2 pl-1.5 mt-1 text-sm rounded-full duration-300 transform select-none text-slate-400 hover:bg-slate-700 bg-slate-800"
                >
                  <Image src={`/${key}.png`} alt={key} width={16} height={16} />
                  <span className="ml-1 font-semibold">
                    {Math.round(value * 100)}%
                  </span>
                  <ReactTooltip
                    id={`${key}-${id}`}
                    place="top"
                    effect="solid"
                    className="whitespace-nowrap !px-3 !py-2 !rounded-lg !bg-slate-800 !text-slate-100"
                  >
                    {(value * 100).toFixed(2).replace('.', ',')}%{' '}
                    {key === 'positive'
                      ? 'positivo'
                      : key === 'negative'
                      ? 'negativo'
                      : key === 'neutral'
                      ? 'neutro'
                      : ''}
                  </ReactTooltip>
                </div>
              ))}
          </div>
        </div>
      </div>
    </li>
  )
}
