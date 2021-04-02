import React from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Switcher.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  id: string
  label?: string
  onChange?: (value: boolean) => void
  checked?: boolean
  uncontrolled?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  id: ''
}

const Switcher: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    theme,
    id,
    label,
    onChange,
    checked,
    uncontrolled
  } = renderProps

  return (
    <div className={`Switcher color-scheme-${theme}`}>
      <input
        type="checkbox"
        className="toggle-switch"
        checked={uncontrolled ? checked : undefined}
        id={id}
        onClick={() => {
          if (!uncontrolled) return
          onChange(!checked)
        }}
        onChange={(e: any) => {
          if (uncontrolled) return
          e.persist()
          onChange(e.target.checked)
        }}
      />
      {
        label && <label htmlFor={id}>{label}</label>
      }
    </div>
  )
}

export default Switcher
