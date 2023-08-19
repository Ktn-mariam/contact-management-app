import React from 'react'
import LineGraph from '../components/LineGraph'
import LeafletMap from '../components/LeafletMap'

function Dashboard() {
  return (
    <div>
      <LeafletMap />
      <LineGraph />
    </div>
  )
}

export default Dashboard
