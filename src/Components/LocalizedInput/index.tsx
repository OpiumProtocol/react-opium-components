import React, { FC, useState, BaseSyntheticEvent, CSSProperties } from 'react'
import { Form } from 'react-bootstrap'
import NumericInput from 'react-numeric-input'

import { ETheme, themes, widgetThemes } from '../../Constants/Types/theme.types'
import { EFieldType } from '../../Constants/Types/LocalizedInput.types'
import _ from '../../Styles/exportColors.scss'

import Button from '../OpiumButton'

import { generateRenderProps } from '../../Utils/helpers'

import './LocalizedInput.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Define input type */
  type?: EFieldType
  /** Set locale */
  locale?: string
  /** Label for input */
  label?: string
  /** Error message */
  errorMessage?: string

  /** Max button (testing) */
  maxButton?: string
  maxValue?: string

  /** Set initial value */
  value?: string | number
  /** Function, that became active by submitting */
  onClick?: () => void
  /** Function, that became active on input change */
  onChange?: Function
  /** Set class selectors */
  className?: string
  /** Set styles */
  style?: CSSProperties
  /** Disabled flag */
  disabled?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  type: EFieldType.NUMBER,
  locale: 'en',
  value: '',
  className: '',
  onClick: () => { },
  onChange: () => { },
}

const localize = (number: number | string, locale: string) => {
  const formatter = new Intl.NumberFormat(locale, { style: 'decimal', maximumFractionDigits: 20 })
  return formatter.format(+number)
}

const LocalizedInput: FC<Props> = (props: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const renderProps = generateRenderProps(defaultProps, props)
  const {
    type,
    theme,
    style,
    value,
    locale,
    label,
    errorMessage,
    maxButton,
    maxValue,
    onChange,
    className,
    disabled,
  } = renderProps

  const { color, backgroundColor, borderColor } = themes[theme as ETheme]


  const styles = {
    backgroundColor: backgroundColor['secondary'].value,
    borderColor: _.darkblue4,
    color: widgetThemes[theme as ETheme].color.secondary.value,
    // color: color['secondary'].value,

    ...style,
  }

  const renderInput = () => {
    const classNames = `OpiumInput ${className !== undefined ? className : ''} ${errorMessage !== undefined ? 'error' : ''} ${disabled ? 'disabled' : ''}`

    if (disabled) {
      styles.backgroundColor = backgroundColor['secondary'].disabled
      styles.borderColor = borderColor['secondary'].disabled
      styles.color = color['secondary'].disabled
    }

    switch (type) {
      case EFieldType.NUMBER:
        return isEditing
          ?
          <NumericInput
            className={classNames}
            style={styles}
            value={value}
            type={'number'}
            onChange={(value: number | null) => onChange(value)}
            onBlur={() => setIsEditing(false)}
            pattern="^-?\d+\.?\d*"
            // onSelect={(e: BaseSyntheticEvent) => e.target.select()}
            disabled={disabled}
          />
          : <Form.Control
            className={classNames}
            style={styles}
            type="text"
            value={localize(value, locale)}
            onChange={(e) => onChange(+e.target.value)}
            onFocus={() => setIsEditing(true)}
            onSelect={(e: BaseSyntheticEvent) => e.target.select()}
            disabled={disabled}
          />
      default:
        return (
          <Form.Control
            className={classNames}
            style={styles}
            type={type}
            value={value === 0 ? '' : value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
          />
        )
    }
  }

  if (disabled) {
    styles.backgroundColor = backgroundColor['secondary'].disabled
    styles.borderColor = borderColor['secondary'].disabled
    styles.color = color['secondary'].disabled
  }

  return (
    <div className={`OpiumFieldset color-scheme-${theme}`}>
      <div className="OpiumFieldset__label">
        {label}
        {
          errorMessage && (
            <span>
              {errorMessage}
            </span>
          )
        }
      </div>
      {renderInput()}
      {
        maxButton && (
          <Button
            theme={theme}
            className="OpiumFieldset__maxBtn"
            label="max"
            variant="secondary"
            onClick={() => (+maxValue > value) && onChange(+maxValue)}
          />
        )
      }
    </div>
  )
}

export default LocalizedInput
