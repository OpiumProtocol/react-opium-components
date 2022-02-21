import React from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './NumberField.scss'
import NumericInput from 'react-numeric-input'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string,
  value: number,
  onChange: (value: number) => void
  disabled?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  value: 0,
  onChange: () => {}
}

const NumberField: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    className,
    value,
    onChange,
    disabled
  } = renderProps

  return (
    <div className={`NumberField ${className} color-scheme-${theme} ${disabled && 'disabled'}`}>
      <NumericInput 
        className="OpiumInputNumber"
        min={0}
        max={10000}
        value={value}
        onChange={(value: number | null) => onChange(value) }
        disabled={disabled}
      />
    </div>
  )
}

export default NumberField
