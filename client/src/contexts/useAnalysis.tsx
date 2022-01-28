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
      }

      return
    }

      {
        text,
        date: new Date().toISOString(),
        ...response.data,
      },
      ...analysis,
  }

  const removeAnalysis = async (id: string) => {
  }

  return (
    <AnalysisContext.Provider value={{ analysis, addAnalysis, removeAnalysis }}>
      {children}
    </AnalysisContext.Provider>
  )
}

