import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

interface CasesByDateType {
  [date: string]: number
}

interface DataPropType {
  cases: CasesByDateType
}

const LineGraph: React.FC<DataPropType> = ({ cases }) => {
  const options: ApexOptions = {
    chart: {
      height: 450,
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
      categories: Object.keys(cases)
        .slice(0, 12)
        .map((value: any) => String(value)),
    },
  }

  const series = [
    {
      name: 'Daily Cases',
      data: Object.values(cases)
        .slice(0, 12)
        .map((value: any) => Number(value)),
    },
  ]

  return (
    <div className="w-70 mx-10 md:mx-20 lg:mx-60">
      <ReactApexChart options={options} series={series} height={450} />
    </div>
  )
}

export default LineGraph
