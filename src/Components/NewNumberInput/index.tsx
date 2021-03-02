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
  onMaxClick?: Function
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
    onChange,
    onMaxClick
  } = renderProps

  return (
    <div className="NewNumberInput">
      <input type="number" value={value} onChange={(e) => onChange(+e.target.value)} />
      <div className="NewNumberInput__label">{label}</div>
      {onMaxClick && <button className="NewNumberInput__max" onClick={onMaxClick}>MAX</button>}
    </div>
  )
}

export default NewNumberInput
