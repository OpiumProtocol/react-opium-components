import React, { FC, ReactNode } from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './RadioButton.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  changed: (e: any) => void
  label?: string
  active: boolean
  activeKey: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  changed: () => {},
  active: false,
  activeKey: ''
}

const RadioButton: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    label,
    activeKey,
    changed,
    active
  } = renderProps

  return (
    <label className={`RadioButton color-scheme-${theme}`}>
      {label}
      <input type="radio" name="radio" checked={active} onChange={() => changed(activeKey)} />
      <span className="checkmark"></span>
    </label>
  )
}

export default RadioButton
