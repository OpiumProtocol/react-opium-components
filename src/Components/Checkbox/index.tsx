import React from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Checkbox.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  label?: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  label: ''
}

const Checkbox: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    label
  } = renderProps

  return (
    <label className={`CheckBox color-scheme-${theme}`}>
      {
        label !== '' && <div className="CheckBox__label">{label}</div>
      }
      <input type="checkbox" />
      <span className="checkmark">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L5.10415 10.331C4.90792 10.6416 4.45499 10.6416 4.25877 10.331L1 5.17356" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </span>
    </label>
  )
}

export default Checkbox
