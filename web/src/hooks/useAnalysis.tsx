import { createContext, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'

interface Analysis {
  id: string;
  text: string;
  date: string;
  probabilities: {
    negative: number;
    neutral: number;
    positive: number;
  };
  sentiment: 'negative' | 'neutral' | 'positive';
  confidence: number;
}

interface AnalysisContext {
  analysis: Analysis[];
  addAnalysis: (text: string) => Promise<void>;
  removeAnalysis: (id: string) => Promise<void>;
}

interface AnalysisProviderProps {
  children: React.ReactNode;
}

const AnalysisContext = createContext<AnalysisContext>({} as AnalysisContext)

export function AnalysisProvider({ children }: AnalysisProviderProps) {
  const [analysis, setAnalysis] = useState<Analysis[]>([])

  const addAnalysis = async (text: string) => {
    let response

    try {
      response = await api.post('predict', { text })
    } catch (e) {
      console.error(e)

      if (
        !process.env.NEXT_PUBLIC_API_ENDPOINT ||
        process.env.NEXT_PUBLIC_API_ENDPOINT === 'http://localhost:8000'
      ) {
        alert('Aguarde o contêiner da API estar pronto')
      }
      
      return
    }

    const data = [
      {
        text,
        date: new Date().toISOString(),
        ...response.data,
      },
      ...analysis,
    ]

    setAnalysis(data)
    localStorage.setItem('analysis', JSON.stringify(data))
  }

  const removeAnalysis = async (id: string) => {
    const data = analysis.filter((_analysis, index) => index !== parseInt(id))

    setAnalysis(data)
    localStorage.setItem('analysis', JSON.stringify(data))
  }

  useEffect(() => {
    const analysis = localStorage.getItem('analysis')

    if (analysis) {
      setAnalysis(JSON.parse(analysis))
    }
  }, [])

  return (
    <AnalysisContext.Provider value={{ analysis, addAnalysis, removeAnalysis }}>
      {children}
    </AnalysisContext.Provider>
  )
}

export function useAnalysis() {
  const context = useContext(AnalysisContext)

  return context
}
