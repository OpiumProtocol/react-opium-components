import React from 'react'
import numeral from 'numeral'
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
  BarChart,
} from 'recharts'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './BarChart.scss'

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
  barSize?: number
  legendName0?: string
  legendName1?: string
  hideSecondBar?: boolean
  hideExpectedBar?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  data: [],
  labelX: {},
  labelY: {},
  tickFormatterX: (label) => label,
  tickFormatterY: (label) => label,
  domainX: [0, 'auto'],
  domainY: [0, 'auto'],
  barSize: 10,
  legendName0: 'green',
  legendName1: 'blue'
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

const OpiumBarChart: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  console.log('OpiumBarChart renderProps', renderProps)

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
    tickFormatterY,
    barSize,
    legendName0,
    legendName1,
    hideSecondBar,
    hideExpectedBar
  } = renderProps

  const CustomTooltip = ({ payload, active }: ICustomTooltip) => {
    console.log('CustomTooltip payload', payload)
    console.log('CustomTooltip active', active)

    if (active) {
      return (
        <div className="custom-tooltip">


          {payload && payload[0] && <div className="label cumulative">
            <div>
              {`${payload[0].payload.barLabel0}`}
            </div>
            <div className='bold'>
              {`$${numeral(payload[0].value).format('0[.]0 a')}`}
            </div>
          </div>}

          {payload && payload[1] && !hideExpectedBar && payload[1].value !== 0 && <div className="label expected">
            <div>
              {`${payload[1].payload.barLabel1}`}
            </div>
            <div className='bold'>
              {`$${numeral(payload[1].value + payload[0].value).format('0[.]0 a')}`}
            </div>
          </div>}

          {payload && payload[2] && !hideSecondBar && <div className="label performance">
            <div>
              {`${payload[2].payload.barLabel2}`}
            </div>
            <div className='bold'>
              {`$${numeral(payload[2].value).format('0[.]0 a')}`}
            </div>
          </div>}


        </div>
      )
    }

    return null
  }

  const dataWithZeros = data.map((el: any) => ({ ...el, zeroLine: 0 }))
  return (
    <div className={`OpiumBarChart color-scheme-${theme}`} style={{ width: width ? width : '100%', height: height ? height : '500px' }}>
      <ResponsiveContainer width='100%' height="100%">
        <BarChart data={dataWithZeros} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1EC992" stopOpacity={0.1}/>
              <stop offset="100%" stopColor="#1EC992" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke={theme === ETheme.DARK ? 'rgba(255, 255, 255, 0.15)' : 'rgba(10, 10, 30, 0.15)'} />
          <XAxis dataKey="label" scale="band" label={labelX} tickFormatter={tickFormatterX} domain={domainX} height={50}/>
          <YAxis label={labelY} tickFormatter={tickFormatterY} allowDataOverflow domain={domainY} tick={{ dx: -17 }}/>
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar name={legendName0} dataKey="barData0" stackId={0} barSize={barSize} fill="rgba(25, 124, 216, 0.5)" stroke='#197CD8' />
          {!hideExpectedBar && <Bar name={legendName1} stackId={0} dataKey="barData1" barSize={barSize} fill="rgba(93, 95, 124, 0.5)" stroke='#999BBC' />}
          {!hideSecondBar && <Bar name={legendName1} dataKey="barData2" barSize={barSize} fill="rgba(30, 201, 146, 0.5)" stroke='#1EC992'/>}
          {/* <Line dataKey="zeroLine" strokeWidth={1} stroke='#C4C4C4' strokeDasharray="4 2 1" dot={false} strokeOpacity={0.2}/> */}
          {/* <Legend layout="horizontal" verticalAlign="bottom" wrapperStyle={{ position: 'absolute' }} /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OpiumBarChart
