import React from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Switcher.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Custom class */
  className?: string
  /** To set the target */
  id: string
  /** Label of current switcher */
  label?: string
  /** For controlled variant. uncontrolled is false (Default) */
  onChange?: (value: boolean) => void
  /** For uncontrolled variant. uncontrolled is true */
  checked?: boolean
  /** If true - you can use 'checked' and control current switcher with it */
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
    className,
    id,
    label,
    onChange,
    checked,
    uncontrolled
  } = renderProps

  return (
    <label className={`Switcher ${className ? className : ''} color-scheme-${theme}`}>
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
        label && <span>{label}</span>
      }
    </label>
  )
}

export default Switcher
