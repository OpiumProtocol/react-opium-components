import React from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Checkbox.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  label?: string | React.ReactNode
  onChange: (e: any) => void
  manualChecked?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  label: '',
  onChange: (e) => {}
}

const Checkbox: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const [checked, setChecked] = React.useState(false)

  const {
    theme,
    label,
    onChange,
    manualChecked
  } = renderProps

  React.useEffect(() => {
    if (manualChecked === true) setChecked(true)
  }, [manualChecked])

  return (
    <label className={`CheckBox color-scheme-${theme}`}>
      {
        label !== '' && <div className="CheckBox__label">{label}</div>
      }
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked)
          onChange(!checked)
        }}
      />
      <span className="checkmark">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L5.10415 10.331C4.90792 10.6416 4.45499 10.6416 4.25877 10.331L1 5.17356" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </span>
    </label>
  )
}

export default Checkbox
