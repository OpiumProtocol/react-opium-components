import React, { FC, ReactNode, useRef } from 'react'
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

const data = [{
  data1: -1,
  price: 0
},
{
  data1: -0.9,
  price: 0
},
{
  data1: -0.8,
  price: 0
},
{
  data1: -0.7,
  price: 0
},
{
  data1: -0.6,
  price: 0
},
{
  data1: -0.5,
  price: 0
},
{
  data1: -0.4,
  price: 0
},
{
  data1: -0.3,
  price: 0
},
{
  data1: -0.2,
  price: 0
},
{
  data1: -0.1,
  price: 0
},
{
  data1: 0,
  data2: 0,
  price: 1
},
{
  data2: 0.1,
  price: 1
},
{
  data2: 0.2,
  price: 1
},
{
  data2: 0.3,
  price: 1
},
{
  data2: 0.4,
  price: 1
},
{
  data2: 0.5,
  price: 1
},
{
  data2: 0.6,
  price: 1
},
{
  data2: 0.7,
  price: 1
},
{
  data2: 0.8,
  price: 1
},
{
  data2: 0.9,
  price: 1
},
{
  data2: 1,
  price: 1.1
},
{
  data2: 1,
  price: 1.2
},
{
  data2: 1,
  price: 1.3
},
{
  data2: 1,
  price: 1.4
},
{
  data2: 1,
  price: 1.5
},
{
  data2: 1,
  price: 1.6
},
{
  data2: 1,
  price: 1.7
},
{
  data2: 1,
  price: 1.8
},
{
  data2: 1,
  price: 1.9
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
}]

const CustomTooltip = ({ active, payload }: {active?: boolean, payload?: any}) => {

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

const CoveredCallOptionChart: FC<TProps> = (props: TProps) => {
  const { isMobile } = useMobile()
  // const dotLabelRef = useRef<SVGCircleElement>(null)

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
        <CartesianGrid strokeOpacity={0.06} strokeDasharray="3 3"/>
        <Line dataKey="zeroLine" strokeWidth="1.8" stroke='white' dot={false} strokeOpacity={1}/>
        <ReferenceLine stroke="white" strokeWidth="1" segment={[{ x: 0, y: -1.3 }, { x: 0, y: 1.3 }]} />
        <ReferenceLine stroke="white" strokeWidth="1" segment={[{ x: 0, y: -1.3 }, { x: 0, y: 1.3 }]} />
        <ReferenceLine strokeWidth={1} stroke='white' segment={[{ x: 20, y: -1.3 }, { x: 20, y: 1.3 }]} />
        <ReferenceLine strokeOpacity={0.2} strokeWidth={1} stroke='#C4C4C4' segment={[{ x: 10, y: -1.3 }, { x: 10, y: 1.3 }]} />
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
        <ReferenceArea x1={0} x2={1} y1={0} y2={-1} fill={'transparent'} label={{ value: 'Covered call', className: 'covered-area-text' }} />
        <ReferenceArea x1={35} x2={39} y1={0} y2={-1} fill={'transparent'} label={{ value: 'Asset price', position: 'insideTop', className: 'axis-text' }} />
        <ReferenceLine stroke="green" strokeDasharray="3 3" segment={[{ x: 0, y: 1 }, { x: 20, y: 1 }]} >
          <Label color={'#1BA159'} value={'Max Profit'} x={isMobile ? 150 : 300} y={20} content={<ReferenceLabel />}/>
        </ReferenceLine>
        <ReferenceDot r={3} fill="#999BBC" stroke="none" x={10} y={0} label={<ReferenceRectDot value={'Break-Even point'} top={25} topY={10} leftX={65} width={130} />} /> 
        <ReferenceDot r={3} fill="#999BBC" stroke="none" x={20} y={0} label={<ReferenceRectDot value={'Strike price'} top={-10} topY={-25} leftX={65} width={130} />} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default CoveredCallOptionChart
