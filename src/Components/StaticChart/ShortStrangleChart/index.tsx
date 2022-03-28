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
  data1: -0.9,
  price: 0.1
},
{
  data1: -0.8,
  price: 0.2
},
{
  data1: -0.7,
  price: 0.3
},
{
  data1: -0.6,
  price: 0.4
},
{
  data1: -0.5,
  price: 0.5
},
{
  data1: -0.4,
  price: 0.6
},
{
  data1: -0.3,
  price: 0.7
},
{
  data1: -0.2,
  price: 0.8
},
{
  data1: -0.1,
  price: 0.9
},
{
  data1: 0,
  data2: 0,
  price: 1
},
{
  data2: 0.1,
  price: 1.1
},
{
  data2: 0.2,
  price: 1.1
},
{
  data2: 0.3,
  price: 1.1
},
{
  data2: 0.4,
  price: 1.1
},
{
  data2: 0.5,
  price: 1.1
},
{
  data2: 0.6,
  price: 1.2
},
{
  data2: 0.7,
  price: 1.3
},
{
  data2: 0.8,
  price: 1.4
},
{
  data2: 0.9,
  price: 1.5
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
  price: 2.1
},
{
  data2: 1,
  price: 2.2
},
{
  data2: 1,
  price: 2.3
},
{
  data2: 1,
  price: 2.4
},
{
  data2: 1,
  price: 2.5
},
{
  data2: 1,
  price: 2.6
},
{
  data2: 1,
  price: 2.7
},
{
  data2: 1,
  price: 2.8
},
{
  data2: 1,
  price: 2.9
},
{
  data2: 1,
  price: 3
},
{
  data2: 1,
  price: 3
},
{
  data2: 0.9,
  price: 2.9
},
{
  data2: 0.8,
  price: 2.8
},
{
  data2: 0.7,
  price: 2.7
},
{
  data2: 0.6,
  price: 2.6
},
{
  data2: 0.5,
  price: 2.5
},
{
  data2: 0.4,
  price: 2.7
},
{
  data2: 0.3,
  price: 2.9
},
{
  data2: 0.2,
  price: 3.2
},
{
  data2: 0.1,
  price: 3.4
},
{
  data2: 0,
  data1: 0,
  price: 3.5
},
{
  data1: -0.1,
  price: 3.1
},
{
  data1: -0.2,
  price: 3.2
},
{
  data1: -0.3,
  price: 3.3
},
{
  data1: -0.4,
  price: 3.4
},
{
  data1: -0.5,
  price: 3.5
},
{
  data1: -0.6,
  price: 3.6
},
{
  data1: -0.7,
  price: 3.7
},
{
  data1: -0.8,
  price: 3.8
},
{
  data1: -0.9,
  price: 3.9
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
          <p className="label" style={{ fontSize: '14px', color: 'white' }}>
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

  const ReferenceRectDot = (props: any) => {
    const { width, color, value, viewBox, top, topY, leftX } = props

    return (
      <g>
        <g>
          <rect
            x={viewBox.x - (leftX ? leftX : 70)}
            y={viewBox.y - (top ? top : 0)}
            rx="12"
            ry="12"
            width={width ? width : 170}
            height={24}
            fill={color ? color : '#0A0A1E'}
            fillOpacity={0.7}
          />
        </g>
        <g> 
          <text x={viewBox.x} y={viewBox.y - (topY ? topY : 10)} fill="#999BBC" fontSize={12} fontWeight="bold" textAnchor="middle">
            {value}
          </text>
        </g>
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
        <Line dataKey="zeroLine" strokeWidth="1.8" stroke='white' dot={false} strokeOpacity={1}/>
        <ReferenceLine stroke="white" strokeWidth={1} segment={[{ x: 26, y: -1.3 }, { x: 26, y: 1.3 }]} />
        <ReferenceLine stroke="white" strokeWidth="1" segment={[{ x: 0, y: -1.3 }, { x: 0, y: 1.3 }]} />
        <ReferenceLine stroke="white" strokeWidth="1" segment={[{ x: 0, y: -1.3 }, { x: 0, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 10, y: -1.3 }, { x: 10, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 20, y: -1.3 }, { x: 20, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 32, y: -1.3 }, { x: 32, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 42, y: -1.3 }, { x: 42, y: 1.3 }]} />
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
        <ReferenceArea x1={41} x2={50} y1={0} y2={-1} fill={'transparent'} label={{ value: 'Asset price', position: `${isMobile ? 'right' : 'insideTopRight'}`, className: 'axis-text' }} />
        <ReferenceLine stroke="green" strokeDasharray="3 3" segment={[{ x: 0, y: 1 }, { x: 20, y: 1 }]} >
          <Label color={'#1BA159'} value={'Max Profit'} x={isMobile ? 150 : 300} y={20} content={<ReferenceLabel />}/>
        </ReferenceLine>
        <ReferenceDot r={3} fill="#999BBC" stroke="none" x={10} y={0} label={<ReferenceRectDot value={'Break-Even point'} top={25} topY={10} leftX={65} width={130} />}/>
        <ReferenceDot r={3} fill="#999BBC" stroke="none" x={20} y={0} label={<ReferenceRectDot value={`${isMobile ? 'Short put' : 'Short Put Strike price'}`} top={-10} topY={-25} leftX={isMobile ? 45 : 85} width={isMobile ? 90 : 165}/>} /> 
        <ReferenceDot r={3} fill="#999BBC" stroke="none" x={32} y={0} label={<ReferenceRectDot value={`${isMobile ? 'Short call' : 'Short Call Strike price'}`} top={-10} topY={-25} leftX={isMobile ? 45 : 85} width={isMobile ? 90 : 165}/>}/> 
        <ReferenceDot r={3} fill="#999BBC" stroke="none" x={42} y={0} label={<ReferenceRectDot value={'Break-Even point'} top={25} topY={10} leftX={65} width={130} />} /> 
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default ShortStrangleChart
