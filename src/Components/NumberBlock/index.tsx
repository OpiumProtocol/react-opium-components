import React, { CSSProperties, FC } from 'react'
import { ETheme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import _ from '../../Styles/exportColors.scss'

import './NumberBlock.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Insert content */
  content?: string | number
  /** To fixed value */
  toFixed?: number
  /** Set styles */
  styles?: CSSProperties
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  content: 100002.0303030303,
  styles: {},
}

const NumberBlock: FC<Props> = (props: Props) => {
  const { content, theme, toFixed, styles } = generateRenderProps(defaultProps, props)

  const color = theme === ETheme.DARK ? _.white0 : _.gray2

  if (`${Number(content)}` === 'NaN') {
    return <span style={{ color }}>Bad format</span>
  }

  if (!content.includes('.') && `${Number(content)}` === 'NaN') {
    return <span style={{ color }}>Bad format</span>
  }

  let tofixed = (content.toString().split('.').length > 1)
    ? content.toString().split('.')[1].length : 1

  tofixed = toFixed ? toFixed : tofixed

  if (content) {
    // Handle numbers
    if (Number(content)) {
      const [int, dec] = Number(content)
        .toFixed(tofixed)
        .toString()
        .split('.')

      return (
        <span style={{ color }}>
          {`${int}.`}
          {dec}
        </span>
      )
    }

    // handle Dates (only 'dd/mm/yyyy hh:mm' format)
    if (content.includes('/') && content.includes(' ')) {
      const [date, time, ...rest] = content.split(' ')
      return (
        <span>
          {`${date} `}
          <span style={{ color }}>
            {time}
            {rest ? ` ${rest}` : ''}
          </span>
        </span>
      )
    }

    // default
    return <span style={{ color }}>{content}</span>
  }
  return null
}

export default NumberBlock
