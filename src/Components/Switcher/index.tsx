import React from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Switcher.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  label?: string
  onChange?: (value: boolean) => void
}

const defaultProps: Props = {
  theme: ETheme.DARK,
}

const Switcher: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    theme,
    label,
    onChange
  } = renderProps

  return (
    <div className={`Switcher color-scheme-${theme}`}>
      <input type="checkbox" className="toggle-switch" id="toggle" onChange={(e: any) => {
        e.persist()
        onChange(e.target.checked)
      }} />
      {
        label && <label htmlFor="toggle">{label}</label>
      }
    </div>
  )
}

export default Switcher
