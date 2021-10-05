import React from 'react'

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
  ResponsiveContainer
} from 'recharts'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Chart.scss'

export type ChartData = {
  tooltipTitle: string
  tooltipSuffix: string
}

export type Props = {
    /** Define theme */
    theme?: ETheme
    width?: string
    height?: string
    data: any[]
    labelX?: {[index: string]: any}
    labelY?: {[index: string]: any}
    chartData1?: ChartData
    chartData2?: ChartData
    domainX?: (string | number)[]
    domainY?: (string | number)[]
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  data: [],
  labelX: {},
  labelY: {},
  domainX: [0, 'auto'],
  domainY: [0, 'auto']
}

const CustomizedActiveDot = React.forwardRef((props: { cx: number, cy: number, fill: string}, ref) => {
  const {
    cx, cy,
    fill
  } = props

  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="dot-bg" cx={cx} cy={cy} r="5" stroke={fill} />
      <circle cx={cx} cy={cy} r="2" fill={fill} />
    </svg>
  )
})

CustomizedActiveDot.displayName = 'CustomizedActiveDot'

const CustomTooltip = ({ active, payload, chartData1, chartData2 }: {active: boolean, payload: any, chartData1?: ChartData, chartData2?: ChartData}) => {
  const tooltips = (chartData1 && chartData2) ? [chartData1, chartData2] : chartData1 ? [chartData1] : [chartData2]
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        {tooltips.map((chartData, i) => {
          return chartData && (<div
            className="custom-tooltip__container"
            style={{ backgroundColor: payload[i].color }}
          >
            <p
              className="label"
            >
              {`${chartData.tooltipTitle}:`}
              <strong> {payload[i].value > 0 ? `+${payload[i].value}` : payload[i].value}</strong>
              {chartData.tooltipSuffix}
            </p>
          </div>)
        })}
      </div>
    )
  }

  return (<div className="tooltip-loading" style={{ backgroundColor: 'white', padding: '0px 8px', borderRadius: '10px' }}>Loading...</div>)
}

const Chart: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    width,
    height,
    data,
    labelX,
    labelY,
    chartData1,
    chartData2,
    domainX,
    domainY
  } = renderProps

  const tickChanger = (dataIndex: number) => {
    return data[dataIndex].price.toFixed(2).toString()
  }

  return (
    <div className={`CustomChart color-scheme-${theme}`} style={{ width: width ? width : '100%', height: height ? height : '500px' }}>
      <ResponsiveContainer width='100%' height="100%">
        <ComposedChart data={data} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F6029C" stopOpacity={0.15}/>
              <stop offset="100%" stopColor="#F6029C" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#197CD8" stopOpacity={0.15}/>
              <stop offset="100%" stopColor="#197CD8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid stroke={theme === ETheme.DARK ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 10, 30, 0.1)'} />
          <XAxis
            // interval="preserveStart"
            label={labelX}
            tickFormatter={tickChanger}
            height={50}
            allowDataOverflow
            domain={domainX}
          />
          <YAxis axisLine label={labelY} allowDataOverflow domain={domainY} tick={{ dx: -10 }}/>
          {
            // @ts-ignore
            <Tooltip content={<CustomTooltip chartData1={chartData1} chartData2={chartData2} />} />
          }
          {chartData1 && <Area
            type="monotone"
            dataKey="data1"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"

            stroke={'#F6029C'}

            // @ts-ignore
            activeDot={<CustomizedActiveDot />}
          />}
          {chartData2 && <Area
            type="monotone"
            dataKey="data2"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPv)"

            stroke={'#197CD8'}

            // @ts-ignore
            activeDot={<CustomizedActiveDot />}
          />}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
