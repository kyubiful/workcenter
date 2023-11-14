'use client'

import { DataGridPremium } from "@mui/x-data-grid-premium"

const rows = [
  { path: ['Proyecto 1'], d1: 0, d2: 0, d3: 0, id: 0 },
  { path: ['Proyecto 1', 'Por defecto'], d1: 0, d2: 0, d3: 0, id: 1 },
  { path: ['Proyecto 1', 'Formación'], d1: 0, d2: 0, d3: 0, id: 2 },
  { path: ['Proyecto 1', 'Test'], d1: 0, d2: 0, d3: 0, id: 3 },
]

const columns = [
  { field: 'd1', width: 250 },
  { field: 'd2', width: 250 },
  { field: 'd3', width: 250 }
]

export function ImputationsTable() {
  return (
    <DataGridPremium
      treeData
      getTreeDataPath={(row) => row.path}
      rows={rows}
      columns={columns}
    />
  )
}
