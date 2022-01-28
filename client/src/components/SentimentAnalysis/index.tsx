import { useAnalysis } from '../../contexts/AnalysisContext'
import { InsertItem } from './InsertItem'
import { Item } from './Item'
import { Timeline } from './Timeline'
import { Title } from './Title'

export function SentimentAnalysis() {
  const { analysis } = useAnalysis()

  return (
    <Timeline>
      <Title>Análise de Sentimento</Title>
      <InsertItem />
      {Object.entries(analysis).map(([key, value]) => (
        <Item key={key} id={key} analysis={value} />
      ))}
    </Timeline>
  )
}
