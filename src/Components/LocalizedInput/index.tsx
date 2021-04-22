import React, { FC, useState, BaseSyntheticEvent, CSSProperties } from 'react'
import { Form } from 'react-bootstrap'

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
  const formatter = new Intl.NumberFormat(locale, { style: 'decimal' })
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


  const styles = {
    ...style,
  }

  const renderInput = () => {
    switch (type) {
      case EFieldType.NUMBER:
        return isEditing
          ? <Form.Control
            className={`OpiumInput${className !== undefined ? ' ' + className : ''}${disabled && ' disabled'}`}
            style={styles}
            type="number"
            value={value === 0 ? '' : value}
            onChange={(e) => onChange(+e.target.value)}
            onBlur={() => setIsEditing(false)}
            onSelect={(e: BaseSyntheticEvent) => e.target.select()}
            disabled={disabled}
          />
          : <Form.Control
            className={`OpiumInput${className !== undefined ? ' ' + className : ''}${disabled && ' disabled'}`}
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
            className={`OpiumInput${className !== undefined ? ' ' + className : ''}${disabled && ' disabled'}`}
            style={styles}
            type={type}
            value={value === 0 ? '' : value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
          />
        )
    }
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
