import Head from 'next/head'

import { SentimentAnalysis } from '../components/SentimentAnalysis'
import { AnalysisProvider } from '../hooks/useAnalysis'

export default function Home() {
  return (
    <>
      <Head>
        <title>Análise de Sentimento</title>
      </Head>
      <main className="container mx-auto">
        <AnalysisProvider>
          <SentimentAnalysis />
        </AnalysisProvider>
      </main>
    </>
  )
}
