import React, { FC, useState, BaseSyntheticEvent } from 'react'

import {
  ETheme,
} from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './NewNumberInput.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set class selectors */
  className?: string
  /** Set component uncontrolled */
  uncontrolled?: boolean
  onChange: Function
  label?: string
  value?: string | number
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  onChange: () => {}
}

const NewNumberInput: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    label,
    value,
    onChange
  } = renderProps

  return (
    <div className="NewNumberInput">
      <input type="number" value={value} onChange={(e) => onChange(+e.target.value)} />
      <div className="NewNumberInput__label">{label}</div>
      <div className="NewNumberInput__max">MAX</div>
    </div>
  )
}

export default NewNumberInput
