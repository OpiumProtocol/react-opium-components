import React, { useState } from 'react'
import numeral from 'numeral'

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
  ResponsiveContainer,
  Line,
  ReferenceLine,
  Label
} from 'recharts'
import { scaleLog } from 'd3-scale'
import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Chart.scss'
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
    referenceLines?: number[]
    increaseDomainY?: number
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
    domainY,
    logScaleY,
    referenceLines,
    increaseDomainY
  } = renderProps

  const tickChanger = (dataIndex: number) => {
    return numeral(data[dataIndex].price).format('0[.]00').toString()
  }

  const dataWithZeros = data.map((el: any) => ({ ...el, zeroLine: 0 }))
  const scale = scaleLog().base(Math.E)

  const [activeRefLabel, setActiveRefLabel] = useState<number | null>(null)
  const domainAxisY = useDomainY(domainY as string[] | number[], increaseDomainY)

  const showRefLabel: any = (label: number | null) => {
    setActiveRefLabel(label)
  }

  const dataRefsLines = referenceLines?.map((el: any) => {
    const obj = dataWithZeros.reduce((prev: any, curr: any) => {
      return (Math.abs(curr.price - el) < Math.abs(prev.price - el) ? curr : prev)
    })
    const index = dataWithZeros.findIndex((el: any) => (el.price === obj.price))
    return ({ data1: index, price: el })
  })


  const CustomLabel = (props: any) => {
    console.log(props)
    return (
      <g>
        <rect
          x={props.viewBox.x}
          y={props.viewBox.y}
          fill="#aaa"
          width={100}
          height={30}
        />
        <text x={props.viewBox.x} y={props.viewBox.y} fill="#111" dy={20} dx={30}>
          Label
        </text>
      </g>
    )
  }

  const AverageCircle = () => {
    return (
      <Label>
        any string or number
      </Label>
    )
  }

  return (
    <div className={`CustomChart color-scheme-${theme}`} style={{ width: width ? width : '100%', height: height ? height : '500px' }}>
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
            tickFormatter={tickChanger}
            height={50}
            allowDataOverflow
            domain={domainX}
          />
          <YAxis 
            axisLine 
            label={labelY} 
            scale={logScaleY ? scale : 'auto'} 
            domain={domainAxisY} 
            tick={{ dx: -10 }} 
            padding={{ bottom: increaseDomainY ? 1 : 0, top: increaseDomainY ? 1 : 0 }}/>
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
          <Line dataKey="zeroLine" strokeWidth={1} stroke='#C4C4C4' strokeDasharray="4 2 1" dot={false} strokeOpacity={0.2}/>
          {dataRefsLines?.map((item: any) => {
            return <ReferenceLine
              x={item.data1}
              key={item.price}
              stroke='#C4C4C4' 
              strokeDasharray="4 2 1" 
              strokeWidth={2}
              strokeOpacity={0.2}
              label={{
                position: 'insideTopRight',
                value: activeRefLabel === item.price ? item.price : '',
                fill: '#595959',
                fontSize: '0.75rem',
              }}
              position={'start'}
              onMouseEnter={() => showRefLabel(item.price)}
              onMouseLeave={() => showRefLabel(null)}
            />
          }) 
          }
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
