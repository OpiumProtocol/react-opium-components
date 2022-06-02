import React, { useEffect, useState } from 'react'

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
  ReferenceDot,
} from 'recharts'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './LineChart.scss'
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
  tickFormatterX?: (value: any) => string
  tickFormatterY?: (value: any) => string
  domainX?: (string | number)[]
  domainY?: (string | number)[]
  intervalX?: number
  intervalY?: number
  dontShowLabel?: boolean,
  increaseDomainY?: number,
  animation?: { end: number, interval: number}
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
  intervalX: 5,
  intervalY: 3
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
    tickFormatterY,
    intervalX,
    dontShowLabel,
    increaseDomainY,
    animation
  } = renderProps

  const domainAxisY = useDomainY(domainY as string[] | number[], increaseDomainY)

  const CustomTooltip = ({ payload, active }: ICustomTooltip) => {
    
    if (active) {
      return (
        <div className="custom-tooltip">
          {(payload && payload[1] && payload[1].payload.tooltipLabel && !dontShowLabel) && (
            <p className="label cumulative">
              {payload[1].payload.tooltipLabel}
            </p>
          )}
          {(payload && payload[0] && payload[0].payload.valueMeaning) && (
            <p className="label performance">
              {`${payload[0].payload.valueMeaning}: ${payload[0].value}%`}
            </p>
          )}
        </div>
      )
    }

    return null
  }

  const [dotAnimation, setDotAnimation] = useState({ x: data[0].label, y: data[0].lineData })
  const [showDot, setShowDot] = useState(true)

  const animationStart = () => {
    let i = 0
    const interval = setInterval(function() {
      console.log('data', data[i])
      setDotAnimation(
        { x: data[i].label, y: data[i].lineData }
      )
      i++
      if (data[i].label >= animation.end) {
        clearInterval(interval)
        setShowDot(false)
      }
    }, animation.interval)
  }

  useEffect(() => {
    animation && animationStart()
  }, [])

  const ReferenceRectDot = (props: any) => {
    const { width, color, value, viewBox, top, topY, leftX } = props

    return (
      <g>
        <g>
          <rect
            x={viewBox.x - (leftX ? leftX : 70)}
            y={viewBox.y - (top ? top : 0)}
            rx="9"
            ry="9"
            width={width ? width : 170}
            height={34}
            fill={color ? color : '#12122C'}
            style={{ stroke: '#5D5F7C' }}
          />
        </g>
        <g> 
          <text x={viewBox.x} y={viewBox.y + 45} fill="#197CD8" fontSize={12} fontWeight="bold" textAnchor="middle">
            {value}
          </text>
        </g>
      </g>
    )
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
          <CartesianGrid vertical={false} stroke={theme === ETheme.DARK ? 'rgba(255, 255, 255, 0.15)' : 'rgba(10, 10, 30, 0.15)'} />
          <XAxis dataKey="label" scale="band" label={labelX} interval={intervalX} tickFormatter={tickFormatterX} domain={domainX} height={50}/>
          <YAxis label={labelY} tickFormatter={tickFormatterY} allowDataOverflow domain={domainAxisY} tick={{ dx: -20 }}/>
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
          {(animation && showDot) 
            && <ReferenceDot r={4} fill="#31EDA9" stroke="white" x={dotAnimation.x} y={dotAnimation.y} label={<ReferenceRectDot value={dotAnimation.y} top={-25} topY={10} leftX={80} width={160} />} />}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart
