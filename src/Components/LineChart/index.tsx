import React from 'react'

import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './LineChart.scss'

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
  tickFormatterX?: (value: any) => string
  tickFormatterY?: (value: any) => string
  domainX?: (string | number)[]
  domainY?: (string | number)[]
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  data: [],
  labelX: {},
  labelY: {},
  tickFormatterX: (label) => label,
  tickFormatterY: (label) => label,
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

type ICustomTooltip = {
    payload?: Array<{[index: string]: any}>
    active?: boolean
}

const LineChart: React.FC<Props> = (props: Props) => {
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
    tickFormatterX,
    tickFormatterY
  } = renderProps

  const CustomTooltip = ({ payload, active }: ICustomTooltip) => {
    if (active) {
      console.log(payload)
      return (
        <div className="custom-tooltip">
          {payload && payload[0] && <p className="label performance">{`${payload[0].payload.valueMeaning}: ${payload[0].value}%`}</p>}
          {payload && payload[1] && <p className="label cumulative">{`${payload[1].payload.label}`}</p>}
        </div>
      )
    }

    return null
  }

  const dataWithZeros = data.map((el: any) => ({ ...el, zeroLine: 0 }))
  return (
    <div className={`LineChart color-scheme-${theme}`} style={{ width: width ? width : '100%', height: height ? height : '500px' }}>
      <ResponsiveContainer width='100%' height="100%">
        <ComposedChart data={dataWithZeros} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#31EDA9" stopOpacity={0.1}/>
              <stop offset="100%" stopColor="#31EDA9" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid stroke={theme === ETheme.DARK ? 'rgba(255, 255, 255, 0.15)' : 'rgba(10, 10, 30, 0.15)'} />
          <XAxis dataKey="label" scale="band" label={labelX} tickFormatter={tickFormatterX} domain={domainX} height={50}/>
          <YAxis label={labelY} tickFormatter={tickFormatterY} allowDataOverflow domain={domainY} tick={{ dx: -10 }}/>
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="lineData"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"

            stroke="#31EDA9"
          />
          <Line dataKey="zeroLine" strokeWidth={1} stroke='#C4C4C4' strokeDasharray="4 2 1" dot={false} strokeOpacity={0.2}/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart
