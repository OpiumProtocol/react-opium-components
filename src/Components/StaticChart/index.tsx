import React, { useState } from 'react'
import numeral from 'numeral'
import CoveredCallChart from './CoveredCallChart'
import ShortStrangleChart from './ShortStrangleChart'
import LongStrangleChart from './LongStrangleChart'

import { scaleLog } from 'd3-scale'
import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './StaticChart.scss'
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
    labelX?: {[index: string]: any}
    labelY?: {[index: string]: any}
    chartData1?: ChartData
    chartData2?: ChartData
    domainX?: (string | number)[]
    domainY?: (string | number)[]
    logScaleY?: boolean
    increaseDomainY?: number,
    type?: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  labelX: {},
  labelY: {},
  domainX: [0, 'auto'],
  domainY: [0, 'auto'],
  type: 'Cavered Call'
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

const StaticChart: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    width,
    height,
    labelX,
    labelY,
    chartData1,
    chartData2,
    domainX,
    domainY,
    logScaleY,
    increaseDomainY,
    type
  } = renderProps

  const tickChanger = (dataIndex: number) => {
   
    let tick: string = ''
    if (dataIndex === -1.1) {
      tick = 'Loss'
    } else if (dataIndex === 1.1) {
      return 'Profit'
    } else if (dataIndex === 0) {
      return '0'
    }
    return tick
  }

  const scale = scaleLog().base(Math.E)

  const domainAxisY = useDomainY(domainY as string[] | number[], increaseDomainY)

  // const CoveredCall = () => {
  //   return (
  //     <ResponsiveContainer width='100%' height="100%">
  //       <ComposedChart data={dataWithZeros} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
  //         <defs>
  //           <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
  //             <stop offset="0%" stopColor="#F6029C" stopOpacity={0.15}/>
  //             <stop offset="100%" stopColor="#F6029C" stopOpacity={0}/>
  //           </linearGradient>
  //           <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
  //             <stop offset="0%" stopColor="#1BA159" stopOpacity={0.15}/>
  //             <stop offset="100%" stopColor="#1BA159" stopOpacity={0}/>
  //           </linearGradient>
  //         </defs>
  //         <CartesianGrid stroke={theme === ETheme.DARK ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 10, 30, 0.1)'} />
  //         <XAxis
  //           label={labelX}
  //           height={50}
  //           allowDataOverflow
  //           domain={domainX}
  //           tick={false}
  //         />
  //         <YAxis
  //           axisLine 
  //           label={labelY} 
  //           scale={logScaleY ? scale : 'auto'} 
  //           domain={domainAxisY} 
  //           tick={{ dx: -20 }} 
  //           // tickCount={3}
  //           tickFormatter={tickChanger}
  //           // ticks={['Loss', '0', 'Profit']}
  //           padding={{ bottom: increaseDomainY ? 1 : 0, top: increaseDomainY ? 1 : 0 }}/>
  //         {chartData1 && <Area
  //           type="linear"
  //           dataKey="data1"
  //           strokeWidth={2}
  //           fillOpacity={1}
  //           fill="url(#colorUv)"

  //           stroke={'#F6029C'}
  //         />}
  //         {chartData2 && <Area
  //           type="linear"
  //           dataKey="data2"
  //           strokeWidth={2}
  //           fillOpacity={1}
  //           fill="url(#colorPv)"

  //           stroke={'#1BA159'}
  //         />}
  //         <ReferenceLine stroke="green" strokeDasharray="3 3" segment={[{ x: 0, y: 1 }, { x: 2, y: 1 }]} >
  //           <Label color={'#1BA159'} value={'Max Profit'} x={300} y={20} content={<ReferenceLabel />}/>
  //         </ReferenceLine>
  //         <ReferenceLine stroke="#F6029C" strokeDasharray="0" strokeWidth={2} segment={[{ x: 0, y: -1 }, { x: 1, y: 0 }]} >
  //           <Label color={'#F6029C'} value={'Covered call'} x={160} y={240} rotate={'-15'} content={<ReferenceLabel />}/>
  //           <Label color={'#ffffff'} value={'Strike price'} x={570} y={140} content={<ReferenceLabel />}/>
  //         </ReferenceLine>
  //         <ReferenceDot r={3} fill="white" stroke="none" x={1} y={0} /> 
  //         <ReferenceDot r={3} fill="white" stroke="none" x={2} y={0} /> 
  //       </ComposedChart>
  //     </ResponsiveContainer>
  //   )
  // }


  const CoveredCall = () => {
    return (
      <CoveredCallChart 
        domainAxisY={domainAxisY}
        increaseDomainY={increaseDomainY}
        chartData1={chartData1}
        chartData2={chartData2}
        logScaleY={logScaleY}
        scale={scale}
      /> 
    )
  }

  const ShortStrangle = () => {
    return (
      <ShortStrangleChart 
        domainAxisY={domainAxisY}
        increaseDomainY={increaseDomainY}
        chartData1={chartData1}
        chartData2={chartData2}
        logScaleY={logScaleY}
        scale={scale}
      /> 
    )
  }

  const LongStrangle = () => {
    return (
      <LongStrangleChart 
        domainAxisY={domainAxisY}
        increaseDomainY={increaseDomainY}
        chartData1={chartData1}
        chartData2={chartData2}
        logScaleY={logScaleY}
        scale={scale}
      /> 
    )
  }

  return (
    <div className={`CustomChart color-scheme-${theme}`} style={{ width: width ? width : '100%', height: height ? height : '500px' }}>
      {(type === 'Covered call' || type === 'Short put') 
        ? CoveredCall()
        : type === 'Long strangle' ? LongStrangle() : type === 'Short strangle' && ShortStrangle() }

    </div>
  )
}

export default StaticChart
