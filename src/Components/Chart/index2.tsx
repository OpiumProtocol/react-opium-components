import React from 'react'
  
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    'data1': 0,
    'data2': 100,
  },
  {
    'data1': 5,
    'data2': 95,
  },
  {
    'data1': 10,
    'data2': 80,
  },
  {
    'data1': 15,
    'data2': 75,
  },
  {
    'data1': 20,
    'data2': 70,
  },
  {
    'data1': 30,
    'data2': 65,
  },

  {
    'data1': 35,
    'data2': 60,
  },
  {
    'data1': 40,
    'data2': 55,
  },
  {
    'data1': 45,
    'data2': 50,
  },
  {
    'data1': 50,
    'data2': 45,
  },

  {
    'data1': 55,
    'data2': 40,
  },
  {
    'data1': 60,
    'data2': 35,
  },
  {
    'data1': 65,
    'data2': 30,
  },
  {
    'data1': 70,
    'data2': 25,
  },
  {
    'data1': 75,
    'data2': 20,
  },
  {
    'data1': 80,
    'data2': 15,
  },
  {
    'data1': 85,
    'data2': 10,
  },
  {
    'data1': 100,
    'data2': 5,
  },
]

//   const convertDate = timestamp => moment(new Date(timestamp * 1000)).format('MMM YY\'')
//   const convertValue = (value: number) =>  `${Math.floor(value/10e2)}M`
  
import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Chart.scss'

export type Props = {
/** Define theme */
theme?: ETheme
}

const defaultProps: Props = {
  theme: ETheme.DARK,
}

const CustomizedDot = React.forwardRef(({ cx, cy }: { cx: number, cy: number}, ref) => (
  <circle cx={cx - 10} cy={cy - 10} r={25} stroke="black" strokeWidth={3} fill="red" />
))

CustomizedDot.displayName = 'CustomizedDot'

// class CustomizedDot extends React.Component {
//     render () {
//         // @ts-ignore
//         const { cx, cy, stroke, payload, value }: {
//             cx: number
//             cy: number
//             stroke: number
//             payload: any
//             value: any
//         } = this.props
  
//       if (value > 2500) {
//         return (
//           <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
//             <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z"/>
//           </svg>
//         );
//       }
  
//       return (
//         <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="green" viewBox="0 0 1024 1024">
//           <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z"/>
//         </svg>
//       );
//     }
//   }

const Chart: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
  } = renderProps

  return (
    <div>
      <ComposedChart width={460} height={230} data={data} margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="#F6029C" stopOpacity={0.1}/>
            <stop offset="100%" stopColor="#F6029C" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="#197CD8" stopOpacity={0.1}/>
            <stop offset="100%" stopColor="#197CD8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis
          // tickCount={10}
          interval={4}
        />
        <YAxis axisLine />
        <Tooltip/>
        {/* <CartesianGrid vertical={false} stroke="#DDD" /> */}
        
        {/* <Line type="monotone" unit="M" strokeLinecap="round" strokeWidth={2}
            style={{ strokeDasharray: `40% 60%` }}
            dataKey="close"
            stroke="#F6029C"
            dot={false}
            legendType="none"
        /> */}
        <Area
          type="monotone"
          dataKey="data1"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"

          stroke={'#F6029C'}
        />
        <Area
          type="monotone"
          dataKey="data2"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorPv)"

          stroke={'#197CD8'}

          // dot={CustomizedDot}
        />
        {/* <CustomizedDot /> */}
      </ComposedChart>    
    </div>
  )
}

export default Chart
