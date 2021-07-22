import React from 'react'

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './OpiumComposedChart.scss'

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
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  data: [],
  labelX: {},
  labelY: {}
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
              <strong> {payload[i].value}</strong>
              {chartData.tooltipSuffix}
            </p>
          </div>)
        })}
      </div>
    )
  }

  return (<div className="tooltip-loading" style={{ backgroundColor: 'white', padding: '0px 8px', borderRadius: '10px' }}>Loading...</div>)
}

const OpiumComposedChart: React.FC<Props> = (props: Props) => {
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
    <div className={`OpiumComposedChart color-scheme-${theme}`} style={{ width: width ? width : '100%', height: height ? height : '500px' }}>
      <ResponsiveContainer width='100%' height="100%">
        <ComposedChart data={data} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid stroke={theme === ETheme.DARK ? 'rgba(255, 255, 255, 0.15)' : 'rgba(10, 10, 30, 0.15)'} />
          <XAxis dataKey="label" scale="band" label={labelX}/>
          <YAxis label={labelY}/>
          <Tooltip />
          <Bar dataKey="barData" barSize={10} fill="#197CD8" />
          <Line type="monotone" dataKey="lineData" stroke="#31EDA9" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OpiumComposedChart
