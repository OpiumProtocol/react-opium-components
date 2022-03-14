import React, { FC } from 'react'
import { ETheme } from '../../../Constants/Types/theme.types'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ComposedChart,
  ResponsiveContainer,
  Line,
  ReferenceLine,
  Label,
  ReferenceDot,
  Scatter,
  ReferenceArea,
  Tooltip
} from 'recharts'
import { useMobile } from '../../../Utils/hooks'

export type ChartData = {
  tooltipTitle: string
  tooltipSuffix: string
}

export type TProps = {
  /** Define theme */
  theme?: ETheme
  /** Set class selectors */
  className?: string
  domainAxisY: any
  increaseDomainY: number
  chartData1: ChartData,
  chartData2: ChartData,
  logScaleY: boolean,
  scale: any
}

const data = [{
  data1: -1,
  price: 0
},
{
  data1: -0.5,
  price: 0.5
},
{
  data1: 0,
  data2: 0,
  price: 1
},
{
  data2: 0.5,
  price: 1.25
},
{
  data2: 1,
  price: 1.5
},
{
  data2: 1,
  price: 2
},
{
  data2: 1,
  price: 3
},
{
  data2: 0.5,
  price: 2.5
},
{
  data2: 0,
  data1: 0,
  price: 3.5
},
{
  data1: -0.5,
  price: 3.5
},
{
  data1: -1,
  price: 4
}]

const CustomTooltip = ({ active, payload, chartData1, chartData2 }: {active?: boolean, payload?: any, chartData1?: ChartData, chartData2?: ChartData}) => {

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        { (<div
          className="custom-tooltip__container"
          style={{ backgroundColor: payload[1].color }}
        >
          <p className="label">
            {payload[1].value > 0 ? 'Profit' : 'Loss'}
          </p>
        </div>)
        }
      </div>
    )
  }

  return (<div className="tooltip-loading" style={{ backgroundColor: 'white', padding: '0px 8px', borderRadius: '10px' }}>Loading...</div>)
}

const ShortStrangleChart: FC<TProps> = (props: TProps) => {
  const { isMobile } = useMobile()

  const { theme, className, domainAxisY, increaseDomainY, chartData1, chartData2, logScaleY, scale } = props

  const tickChanger = (dataIndex: number) => {
    let tick: string = ''
    if (dataIndex === -1.3) {
      tick = 'Loss'
    } else if (dataIndex === 1.3) {
      return 'Profit'
    } else if (dataIndex === 0) {
      return '0'
    }
    return tick
  }

  const ReferenceLabel = (props: any) => {
    const { color, value, x, y, rotate = 0 } = props

    return (
      <g>
        <text x={x} y={y} fill={color} fontSize="8pt" dy={0} dx={0} transform={`rotate(${rotate})`}>
          {value}
        </text>
      </g>
    )
  }

  const dataWithZeros = data.map((el: any) => ({ ...el, zeroLine: 0 }))

  return (
    <ResponsiveContainer width='100%' height="100%">
      <ComposedChart data={dataWithZeros} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F6029C" stopOpacity={0.15}/>
            <stop offset="100%" stopColor="#F6029C" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1BA159" stopOpacity={0.15}/>
            <stop offset="100%" stopColor="#1BA159" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeOpacity={0.05} strokeDasharray="3 3"/>
        <Line dataKey="zeroLine" strokeWidth={1} stroke='#C4C4C4' dot={false} strokeOpacity={0.2}/>
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 2, y: -1.3 }, { x: 2, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 4, y: -1.3 }, { x: 4, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 6, y: -1.3 }, { x: 6, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 8, y: -1.3 }, { x: 8, y: 1.3 }]} />
        <Tooltip content={<CustomTooltip chartData1={chartData1} chartData2={chartData2} />} />
        <XAxis
          height={50}
          allowDataOverflow
          domain={[0, 'auto']}
          tick={false}
        />
        <YAxis
          axisLine 
          scale={logScaleY ? scale : 'auto'} 
          domain={domainAxisY} 
          tick={{ dx: -20 }} 
          tickFormatter={tickChanger}
          padding={{ bottom: increaseDomainY ? 1 : 0, top: increaseDomainY ? 1 : 0 }}/>
        {chartData1 && <Area
          type="linear"
          dataKey="data1"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"

          stroke={'#F6029C'}
        />}
        {chartData2 && <Area
          type="linear"
          dataKey="data2"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorPv)"

          stroke={'#1BA159'}
        />}
        <ReferenceArea x1={6} x2={6} y1={0} y2={-1} fill={'transparent'} label={{ value: 'Unlimited loss', className: 'short-strangle-area-text' }} />
        <ReferenceLine stroke="green" strokeDasharray="3 3" segment={[{ x: 0, y: 1 }, { x: 4, y: 1 }]} >
          <Label color={'#1BA159'} value={'Max Profit'} x={isMobile ? 150 : 300} y={20} content={<ReferenceLabel />}/>
        </ReferenceLine>
        <ReferenceDot r={3} fill="white" stroke="none" x={2} y={0} label={{ value: 'Break-Event point', fill: 'white', fontSize: '8', position: 'top' }}/>
        <ReferenceDot r={3} fill="white" stroke="none" x={4} y={0} label={{ value: `${isMobile ? 'Short put' : 'Short Put Strike price'}`, fill: 'white', fontSize: '8', position: 'bottom', offset: isMobile ? 20 : 5 }}/> 
        <ReferenceDot r={3} fill="white" stroke="none" x={6} y={0} label={{ value: `${isMobile ? 'Short call' : 'Short Call Strike price'}`, fill: 'white', fontSize: '8', position: 'bottom' }}/> 
        <ReferenceDot r={3} fill="white" stroke="none" x={8} y={0} label={{ value: 'Break-Event point', fill: 'white', fontSize: '8', position: 'top' }}/> 
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default ShortStrangleChart
