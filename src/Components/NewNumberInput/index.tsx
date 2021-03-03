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
  disabled?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  onChange: () => {}
}

const NewNumberInput: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    theme,
    label,
    value,
    onChange,
    onMaxClick,
    disabled
  } = renderProps

  const [localValue, setLocalValue] = React.useState<string>('')

  React.useEffect(() => {
    setLocalValue(value)
  }, [])

  return (
    <div className={`NewNumberInput color-scheme-${theme}`}>
      <input
        disabled={disabled}
        type="number"
        value={localValue}
        onFocus={(e) => (e.target.value === '0') ? setLocalValue('') : e.target.select()}
        onChange={(e) => {
          setLocalValue(e.target.value)
          onChange(+e.target.value)
        }}
        onBlur={() => localValue === '' ? setLocalValue('0') : ''}
      />
      <div className="NewNumberInput__label">{label}</div>
      {onMaxClick && <button className="NewNumberInput__max" onClick={onMaxClick}>MAX</button>}
    </div>
  )
}

export default NewNumberInput
