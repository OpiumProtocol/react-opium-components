import React from 'react'
import Loader, { LoadingType } from 'react-loading'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'
import _ from '../../Styles/exportColors.scss'

import './Checkbox.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  label?: string | React.ReactNode
  onChange: (e: any) => void
  manualChecked?: boolean
  loading?: boolean
  disabled?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  label: '',
  onChange: (e) => {},
  loading: false,
  disabled: false
}

const Checkbox: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const [checked, setChecked] = React.useState(false)

  const {
    theme,
    label,
    onChange,
    manualChecked,
    loading,
    disabled
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
        checked={manualChecked}
        disabled={disabled}
        onChange={() => {
          // setChecked(!checked)
          onChange(!checked)
        }}
        className={`${disabled ? 'checkbox-input-disabled' : ''}`}
      />
      {loading ? 
        <Loader className="loading-check" type='spin' width="16px" height="16px" color={theme === ETheme.DARK ? _.white : _.darkblue1}/> 
        :
        <span className={`checkmark ${disabled && 'checkbox-input-disabled'}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L5.10415 10.331C4.90792 10.6416 4.45499 10.6416 4.25877 10.331L1 5.17356" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      }
    </label>
  )
}

export default Checkbox
