import React, { CSSProperties, FC } from 'react'
import { ETheme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import _ from '../../Styles/exportColors.scss'

import './NumberBlock.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Insert content */
  content?: number
  /** To fixed value */
  toFixed?: number
  /** Set styles */
  styles?: CSSProperties
  /** Set locale */
  locale?: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  content: 100002.0303030303,
  styles: {},
  locale: 'en'
}

const NumberBlock: FC<Props> = (props: Props) => {
  const { content, theme, toFixed, styles, locale } = generateRenderProps(defaultProps, props)

  const color = theme === ETheme.DARK ? _.white0 : _.gray2

  return (
    <span style={{ color, ...styles }}>
      {toFixed !== undefined ? Number(content.toFixed(toFixed)).toLocaleString(locale) : content.toLocaleString(locale)}
    </span>
  )
}

export default NumberBlock
