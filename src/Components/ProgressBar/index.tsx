import React, { FC, ReactNode } from 'react'
import { ProgressBar } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './ProgressBar.scss'

export type Props = {
    /** Define theme */
    theme: ETheme
    className?: string
    label?: ReactNode | string
    percentage: number
    percentageLabel?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  percentage: 0,
  percentageLabel: false
}

const ProgressOpiumBar: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    className,
    theme,
    label,
    percentage,
    percentageLabel
  } = renderProps

  return (<div className={`progress-wrapper color-scheme-${theme} ${className ? className : ''}`}>
    <div className={'progress-bar-title'}>
      <div className={'progress-label'}>{label ? label : ''}</div>
      <div className={'progress-value'}>{percentageLabel ? `${percentage}%` : ''}</div>
    </div>
    <ProgressBar now={percentage} />
  </div>)
}

export default ProgressOpiumBar
