import React, { FC, useMemo, useState } from 'react'
import numeral from 'numeral'
import CoveredCallChart from './CoveredCallChart'
import ShortStrangleChart from './ShortStrangleChart'
import LongStrangleChart from './LongStrangleChart'
import CoveredCollarChart from './CoveredCollarChart'
import OutrightShortPutChart from './OutrightShortPutChart'
import OptionCallChart from './OptionCallChart'
import OptionPutChart from './OptionPutChart'

import { scaleLog } from 'd3-scale'
import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './StaticChart.scss'
import { useDomainY } from '../../Utils/hooks'

type TArticlesComponents = {
  [key: string]: React.FC<TPropsChart>
}

type TPropsChart = {
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

  const scale = scaleLog().base(Math.E)

  const domainAxisY = useDomainY(domainY as string[] | number[], increaseDomainY)

  const camel2title = (camelCase: string) => {
    return camelCase.split(' ').map((el: string) => el.replace(/^./, (match) => match.toUpperCase())).join('') + 'Chart'
  }

  const content = useMemo(() => {
    const components: TArticlesComponents = {
      CoveredCallChart,
      ShortStrangleChart,
      LongStrangleChart,
      CoveredCollarChart,
      OutrightShortPutChart,
      OptionPutChart,
      OptionCallChart
    }

    const componentName = camel2title(type)
    const DynamicComponent = components[componentName]

    return (
      <>
        <DynamicComponent
          domainAxisY={domainAxisY}
          increaseDomainY={increaseDomainY}
          chartData1={chartData1}
          chartData2={chartData2}
          logScaleY={logScaleY}
          scale={scale}
        />
      </>
    )
  }, [type, domainAxisY])

  return (
    <div className={`CustomChart color-scheme-${theme}`} style={{ width: width ? width : '100%', height: height ? height : '500px' }}>
      {content}
    </div>
  )
}

export default StaticChart
