import React from 'react'

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
  ResponsiveContainer,
  Line
} from 'recharts'
import { scaleLog } from 'd3-scale'
import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './MultipleLineChart.scss'
import { useDomainY } from '../../Utils/hooks'

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
    logScaleY?: boolean
    tickFormatterX?: (value: any) => string
    tickFormatterY?: (value: any) => string
    increaseDomainY?: number
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  data: [],
  labelX: {},
  labelY: {},
  domainX: [0, 'auto'],
  domainY: [0, 'auto'],
  tickFormatterX: (label) => label,
  tickFormatterY: (label) => label,
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

type ICustomTooltip = {
  payload?: Array<{[index: string]: any}>
  active?: boolean
  chartData1?: any
  chartData2?: any
}


const CustomTooltip = ({ payload, active, chartData1, chartData2 }: ICustomTooltip) => {
  if (active) {
    if (payload && payload[0].payload.customTooltip) {
      return (
        <div className="custom-tooltip">
          {payload[0].payload.customTooltip}
        </div>
      )
    }
    
    if (payload && payload.length) {
      const tooltips = (chartData1 && chartData2) ? [chartData1, chartData2] : chartData1 ? [chartData1] : [chartData2]

      return (
        <div className="custom-tooltip">
          {tooltips.map((chartData, i) => {
            return chartData && (<div className="custom-tooltip__container">
              <p
                className="label"
                style={{ color: payload[i].color }}
              >
                {`${chartData.tooltipTitle}:`}
                <strong> {payload[i].value} {chartData.tooltipSuffix}</strong>
              </p>
            </div>)
          })}
        </div>
      )
    }
  }
  
  return (<div className="tooltip-loading" style={{ backgroundColor: 'white', padding: '0px 8px', borderRadius: '10px' }}>Loading...</div>)

}


const MultipleLineChart: React.FC<Props> = (props: Props) => {
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
    domainY,
    logScaleY,
    tickFormatterX,
    tickFormatterY,
    increaseDomainY
  } = renderProps

  const dataWithZeros = data.map((el: any) => ({ ...el, zeroLine: 0 }))
  const scale = scaleLog().base(Math.E)
  const domainAxisY = useDomainY(domainY as string[] | number[], increaseDomainY)  

  return (
    <div className={`MultipleLineChart color-scheme-${theme}`} style={{ width: width ? width : '100%', height: height ? height : '500px' }}>
      <ResponsiveContainer width='100%' height="100%">
        <ComposedChart data={dataWithZeros} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
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
            height={50}
            allowDataOverflow
            domain={domainX}
            tickFormatter={tickFormatterX}
          />
          <YAxis axisLine label={labelY} scale={logScaleY ? scale : 'auto'} tickFormatter={tickFormatterY} allowDataOverflow domain={domainAxisY} tick={{ dx: -10 }}/>
          <Tooltip content={<CustomTooltip chartData1={chartData1} chartData2={chartData2} />} cursor={false} />
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
          <Line dataKey="zeroLine" strokeWidth={1} stroke='#C4C4C4' strokeDasharray="4 2 1" dot={false} strokeOpacity={0.2}/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MultipleLineChart
