import React, { FC, ReactNode } from 'react'
import { ETheme } from '../../../Constants/Types/theme.types'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ComposedChart,
  ResponsiveContainer,
  ReferenceLine,
  Label,
  ReferenceDot,
  Line,
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
  increaseDomainY: any
  chartData1: ChartData,
  chartData2: ChartData,
  logScaleY: any,
  scale: any
}

const data = [
  {
    data1: -1,
    price: 0.1
  },
  {
    data1: -1,
    price: 0.2
  },
  {
    data1: -1,
    price: 0.3
  },
  {
    data1: -1,
    price: 0.4
  },
  {
    data1: -1,
    price: 0.5
  }, 

  {
    data1: -1,
    price: 1
  },
  {
    data1: -0.8,
    price: 1.25
  },
  {
    data1: -0.6,
    price: 1.5
  },
  {
    data1: -0.4,
    price: 1.75
  },
  {
    data1: -0.2,
    price: 2
  },
  {
    data1: 0,
    data2: 0,
    price: 2
  },

  {
    data2: 0.2,
    price: 2.2
  },
  {
    data2: 0.4,
    price: 2.4
  },
  {
    data2: 0.6,
    price: 2.6
  },
  {
    data2: 0.8,
    price: 2.8
  },
  {
    data2: 1,
    price: 3
  },

  {
    data2: 1,
    price: 3.5
  },
  {
    data2: 1,
    price: 3.6
  },
  {
    data2: 1,
    price: 3.7
  },
  {
    data2: 1,
    price: 3.8
  },
  {
    data2: 1,
    price: 3.9
  },
  {
    data2: 1,
    price: 4
  }]


const CustomTooltip = ({ active, payload }: {active?: boolean, payload?: any}) => {

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        { (<div
          className="custom-tooltip__container"
          style={{ backgroundColor: payload[1].color }}
        >
          <p className="label static-chart-label" style={{ fontSize: '14px' }}>
            {payload[1].value > 0 ? 'Profit' : 'Loss'}
          </p>
        </div>)
        }
      </div>
    )
  }

  return (<div className="tooltip-loading" style={{ backgroundColor: 'white', padding: '0px 8px', borderRadius: '10px' }}>Loading...</div>)
}

const CoveredCollarChart: FC<TProps> = (props: TProps) => {
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
        <Line dataKey="zeroLine" strokeWidth={0.5} stroke='white' dot={false} strokeOpacity={1}/>
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 5, y: -1.3 }, { x: 5, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 15, y: -1.3 }, { x: 15, y: 1.3 }]} />
        <ReferenceLine stroke="white" strokeWidth="0.5" segment={[{ x: 10, y: -1.3 }, { x: 10, y: 1.3 }]} />
        <ReferenceLine stroke="white" strokeWidth="0.5" segment={[{ x: 0, y: -1.3 }, { x: 0, y: 1.3 }]} />
        <ReferenceArea x1={8} x2={12} y1={0.01} y2={0.3} fill={'rgba(10, 10, 30, 1)'} />
        <ReferenceArea x1={3} x2={7} y1={-0.3} y2={-0.01} fill={'rgba(10, 10, 30, 1)'} />
        <ReferenceArea x1={13} x2={17} y1={-0.3} y2={-0.01} fill={'rgba(10, 10, 30, 1)'} />
        <Tooltip content={<CustomTooltip />} />
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
        <ReferenceArea x1={0} x2={1} y1={0} y2={-1} strokeDasharray="3 3" fill={'transparent'} label={{ value: 'Max loss', className: 'protactive-collar-area-text' }} />
        <ReferenceArea x1={15} x2={20} y1={0} y2={-1} fill={'transparent'} label={{ value: 'Asset price', position: `${isMobile ? 'right' : 'insideTopRight'}`, className: 'axis-text' }} />
        <ReferenceLine stroke="green" strokeDasharray="3 3" segment={[{ x: 0, y: 1 }, { x: 15, y: 1 }]} >
          <Label color={'#1BA159'} value={'Max profit'} x={isMobile ? 150 : 300} y={20} content={<ReferenceLabel />}/>
        </ReferenceLine>
        <ReferenceDot r={3} fill="#999BBC" stroke="none" x={5} y={0} label={{ value: 'Put strike price', position: 'bottom', className: 'tspan-color' }}/> 
        <ReferenceDot r={3} fill="#999BBC" stroke="none" x={10} y={0} label={{ value: 'Break-even point', position: 'top', className: 'tspan-color' }}/>
        <ReferenceDot r={3} fill="#999BBC" stroke="none" x={15} y={0} label={{ value: 'Call strike price', position: 'bottom', className: 'tspan-color' }}/>
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default CoveredCollarChart
