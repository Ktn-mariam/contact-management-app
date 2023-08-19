import React from 'react'
import { useQuery } from '@tanstack/react-query'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

function LineGraph() {
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      fetch(
        'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
      ).then((res) => res.json()),
  })
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error has occurred</div>
  const options: ApexOptions = {
    chart: {
      height: 350,
      width: 200,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Cases Per Day',
      align: 'center',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: Object.values(data.cases)
        .slice(0, 12)
        .map((value: any) => Number(value)),
    },
  }

  const series = [
    {
      name: 'Daily Cases',
      data: Object.values(data.cases)
        .slice(0, 12)
        .map((value: any) => Number(value)),
    },
  ]

  console.log(data)
  return (
    <div className="w-70">
      <ReactApexChart options={options} series={series} height={350} />
    </div>
  )
}

export default LineGraph
