import type { ReactNode } from 'react'
import SportsDashboard from './templates/tests-home'
import ProgressHistory from './templates/test-comparator'
import StressTestDataEntry from './templates/test-form'
import CardioSelection from './templates/test-per-type'
import TestResults from './templates/test-result'
import HistoricalRecords from './templates/tests-history'

export type AppRouteDefinition = {
  path: string
  label: string
  element: ReactNode
}

export const appRoutes: AppRouteDefinition[] = [
  {
    path: '/',
    label: 'Inicio',
    element: <SportsDashboard />,
  },
  {
    path: '/test-comparator',
    label: 'Test Comparator',
    element: <ProgressHistory />,
  },
  {
    path: '/test-form',
    label: 'Test Form',
    element: <StressTestDataEntry />,
  },
  {
    path: '/test-per-type',
    label: 'Test Per Type',
    element: <CardioSelection />,
  },
  {
    path: '/test-result',
    label: 'Test Result',
    element: <TestResults />,
  },
  {
    path: '/tests-history',
    label: 'Tests History',
    element: <HistoricalRecords />,
  },
]