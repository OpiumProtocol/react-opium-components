import React, { BaseSyntheticEvent, useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, widgetThemes } from '../../Constants/Types/theme.types'

import './NumberField.scss'
import NumericInput from 'react-numeric-input'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  // onChange?: (eventKey: any, event: BaseSyntheticEvent) => any,
  onChange: (value: number | null) => void
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  // onChange: (eventKey: any, event: BaseSyntheticEvent) => { },
  onChange: (value: number | null) => {}
}

const NumberField: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    className,
    onChange,
  } = renderProps

  const { color, backgroundColor } = widgetThemes[theme as ETheme]

  const hoveredItem = {
    backgroundColor: backgroundColor['primary'].hover,
    color: color['info'].hover,
  }
  
  const styledItem = {
    backgroundColor: backgroundColor['primary'].value,
    color: color['info'].value,
    borderStyle: 'solid',
  }

  return (
    <div className={`NumberField ${className} color-scheme-${theme}`}>
      <NumericInput 
        className="OpiumInputNumber"
        min={0}
        max={10000}
        value={0}
        onChange={(value: number | null) => onChange(value) }
      />
    </div>
  )
}

export default NumberField
