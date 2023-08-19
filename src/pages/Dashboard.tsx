import React from 'react'
import LineGraph from '../components/LineGraph'
import LeafletMap from '../components/LeafletMap'
import { useQuery } from '@tanstack/react-query'

function Dashboard() {
  const lineGraphData = useQuery(
    ['lineGraphData'], // Provide a unique query key array for this query
    () =>
      fetch(
        'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
      ).then((res) => res.json()),
  )

  const leafletDataQuery = useQuery(
    ['leafletData'], // Provide a unique query key array for this query
    () =>
      fetch('https://disease.sh/v3/covid-19/countries').then((res) =>
        res.json(),
      ),
  )

  if (lineGraphData.isLoading || leafletDataQuery.isLoading)
    return <div>Loading...</div>
  if (lineGraphData.error || leafletDataQuery.error)
    return <div>Error fetching data.</div>

  console.log('Hiiii')
  console.log(leafletDataQuery.data)

  return (
    <div className=" bg-gray-100 flex-col items-center py-20">
      <div className=" mx-10 md:mx-20 lg:mx-60">
        <div className="text=lg font-bold text-center">
          React leaflet Map displaying the number of active, recovered and
          deaths in each country
        </div>
      </div>
      <LeafletMap data={leafletDataQuery.data} />
      <LineGraph cases={lineGraphData.data.cases} />
    </div>
  )
}

export default Dashboard
