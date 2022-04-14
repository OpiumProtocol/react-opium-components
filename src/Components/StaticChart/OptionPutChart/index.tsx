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
    data2: 1,
    price: 0.1
  },
  {
    data1: -0.9,
    data2: 0.9,
    price: 0.15
  },
  {
    data1: -0.8,
    data2: 0.8,
    price: 0.2
  },
  {
    data1: -0.7,
    data2: 0.7,
    price: 0.25
  },
  {
    data1: -0.6,
    data2: 0.6,
    price: 0.3
  },
  {
    data1: -0.5,
    data2: 0.5,
    price: 0.35
  },
  {
    data1: -0.4,
    data2: 0.4,
    price: 0.4
  },
  {
    data1: -0.3,
    data2: 0.3,
    price: 0.45
  },
  {
    data1: -0.2,
    data2: 0.2,
    price: 0.5
  },
  {
    data1: -0.1,
    data2: 0.1,
    price: 0.55
  },
  {
    data1: 0,
    data2: 0,
    price: 0.6
  },
  {
    data1: 0.1,
    data2: -0.1,
    price: 0.65
  },
  {
    data1: 0.2,
    data2: -0.2,
    price: 0.7
  },
  {
    data1: 0.3,
    data2: -0.3,
    price: 0.75
  },
  {
    data1: 0.4,
    data2: -0.4,
    price: 0.8
  },
  {
    data1: 0.5,
    data2: -0.5,
    price: 0.85
  },
  {
    data1: 0.6,
    data2: -0.6,
    price: 0.9
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1.1
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1.2
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1.3
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1.4
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1.5
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1.6
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1.7
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1.8
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 1.9
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 2
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 2.1
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 2.2
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 2.3
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 2.4
  },
  {
    data1: 0.7,
    data2: -0.7,
    price: 2.5
  }
]

const CustomTooltip = ({ active, payload, chartData1, chartData2 }: {active?: boolean, payload?: any, chartData1?: ChartData, chartData2?: ChartData}) => {
  const tooltips = (chartData1 && chartData2) ? [chartData1, chartData2] : chartData1 ? [chartData1] : [chartData2]
  
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip static-tooltip">
        {tooltips.map((chartData, i) => {
          return chartData && (<div
            className="custom-tooltip__container"
            style={{ backgroundColor: payload[i + 1].color }}
          >
            <p className="label" style={{ fontSize: '14px', color: 'white' }}>
              {(i % 2 == 0) ? payload[i + 1].value > 0 ? 'Profit' : 'Loss' : payload[i + 1].value < 0 ? 'Loss' : 'Profit'}
            </p>
          </div>)
        })}
      </div>
    )
  }

  return (<div className="tooltip-loading" style={{ backgroundColor: 'white', padding: '0px 8px', borderRadius: '10px' }}>Loading...</div>)
}

const OptionPutChart: FC<TProps> = (props: TProps) => {
  const { isMobile } = useMobile()

  const { increaseDomainY, chartData1, chartData2, logScaleY, scale } = props

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

  const dataWithZeros = data.map((el: any) => ({ ...el, zeroLine: 0 }))

  const ReferenceRectDot = (props: any) => {
    const { width, color, value, viewBox, top, topY, leftX } = props

    return (
      <g>
        <g>
          <rect
            x={viewBox.x - (leftX ? leftX : 70)}
            y={viewBox.y - (top ? top : 0)}
            rx="13"
            ry="13"
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

  return (
    <ResponsiveContainer width='100%' height="100%">
      <ComposedChart data={dataWithZeros} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="-0.3" x2="1" y2="-1" style={{ zIndex: -1 }} >
            <stop offset="0%" stopColor="#F6029C" stopOpacity={0.05}/>
            <stop offset="100%" stopColor="#F6029C" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1" style={{ zIndex: -1 }}>
            <stop offset="0%" stopColor="#1BA159" stopOpacity={0.05}/>
            <stop offset="100%" stopColor="#1BA159" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeOpacity={0.05} strokeDasharray="3 3"/>
        <Line dataKey="zeroLine" strokeWidth="1.8" stroke='white' dot={false} strokeOpacity={1}/>
        <ReferenceLine stroke="white" strokeWidth="1" segment={[{ x: 17, y: -1.3 }, { x: 17, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 10, y: -1.3 }, { x: 10, y: 1.3 }]} />
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
          style={{ zIndex: -1 }}
          stroke={'#1BA159'}
        />}
        <ReferenceArea x1={25} x2={30} y1={0} y2={-1} fill={'transparent'} label={{ value: 'Asset price', position: `${isMobile ? 'right' : 'insideTopRight'}`, className: 'axis-text' }} />
        <ReferenceArea x1={25} x2={30} y1={0} y2={1} fill={'transparent'} label={{ value: 'Short put', position: `${isMobile ? 'right' : 'insideTopRight'}`, className: 'axis-text axis-text-pink' }} />
        <ReferenceArea x1={25} x2={30} y1={-0.8} y2={-0.9} fill={'transparent'} label={{ value: 'Long put', position: `${isMobile ? 'right' : 'insideTopRight'}`, className: 'axis-text axis-text-green' }} />
        <ReferenceDot r={3} stroke="none" x={10} y={0} label={<ReferenceRectDot value={'Break-even point'} leftX={60} top={-17} width={120} topY={-32} color={'rgba(10, 10, 30, 0.8)'} />}/>
        <ReferenceDot r={3} stroke="none" x={17} y={0} label={<ReferenceRectDot value={'Strike price'} leftX={45} top={25} width={90} color={'rgba(10, 10, 30, 0.8)'} />}/>
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default OptionPutChart
