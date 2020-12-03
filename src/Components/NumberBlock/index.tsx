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
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  content: 100002.0303030303,
  styles: {},
}

const NumberBlock: FC<Props> = (props: Props) => {
  const { content, theme, toFixed, styles } = generateRenderProps(defaultProps, props)

  const color = theme === ETheme.DARK ? _.white0 : _.gray2

  return (
    <span style={{ color, ...styles }}>
      {toFixed ? content.toFixed(toFixed) : content}
    </span>
  )
}

export default NumberBlock
