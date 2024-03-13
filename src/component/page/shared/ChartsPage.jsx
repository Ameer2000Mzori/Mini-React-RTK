import React, { Fragment, useState } from 'react'
import { AgChartsReact } from 'ag-charts-react'
import { StyledPageWrapper } from './StyledComponents.jsx'

const ChartExample = () => {
  const [options, setOptions] = useState({
    data: [
      { days: '1', avgTemp: 14.5, views: 150000 },
      { days: '2', avgTemp: 8.9, views: 150000 },
      { days: '3', avgTemp: 2.9, views: 150000 },
      { days: '4', avgTemp: 14.5, views: 150000 },
      { days: '5', avgTemp: 8.9, views: 150000 },
      { days: '6', avgTemp: 2.9, views: 150000 },
      { days: '7', avgTemp: 14.5, views: 150000 },
      { days: '8', avgTemp: 8.9, views: 150000 },
      { days: '9', avgTemp: 2.9, views: 150000 },
      { days: '10', avgTemp: 14.5, views: 150000 },
      { days: '11', avgTemp: 8.9, views: 150000 },
      // Add more data for other days
    ],
    series: [{ type: 'bar', xKey: 'days', yKey: 'views' }],
    legend: { enabled: true },
    title: { text: 'Products Added' },
    xAxis: {
      title: { text: 'Day' },
      navigator: { enabled: true, height: 20 }, // Enable scrollbar
    },
    yAxis: { title: { text: 'Sales' } },
  })

  return <AgChartsReact options={options} />
}

const DisplayChart = () => {
  return (
    <StyledPageWrapper>
      <Fragment>
        <div className="h-[500px] overflow-x-auto">
          <ChartExample />
        </div>
      </Fragment>
    </StyledPageWrapper>
  )
}

export default DisplayChart
