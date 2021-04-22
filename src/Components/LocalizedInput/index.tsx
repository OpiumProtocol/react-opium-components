import React, { FC, useState, BaseSyntheticEvent, CSSProperties } from 'react'
import { Form } from 'react-bootstrap'
import NumericInput from 'react-numeric-input'

import { ETheme, themes, widgetThemes } from '../../Constants/Types/theme.types'
import { EFieldType } from '../../Constants/Types/LocalizedInput.types'
import _ from '../../Styles/exportColors.scss'

import { generateRenderProps } from '../../Utils/helpers'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Define input type */
  type?: EFieldType
  /** Set locale */
  locale?: string
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
  const { type, theme, style, value, locale, onChange, className, disabled } = renderProps

  const { color, backgroundColor, borderColor } = themes[theme as ETheme]

  const styles = {
    backgroundColor: backgroundColor['secondary'].value,
    borderColor: _.darkblue4,
    color: widgetThemes[theme as ETheme].color.secondary.value,
    // color: color['secondary'].value,
    borderStyle: 'solid',
    borderRadius: '4px',
    ...style,
  }

  if (disabled) {
    styles.backgroundColor = backgroundColor['secondary'].disabled
    styles.borderColor = borderColor['secondary'].disabled
    styles.color = color['secondary'].disabled
  }

  return (
    <>
      {
        (() => {
          switch (type) {
            case EFieldType.NUMBER:
              return isEditing
                ?
                <NumericInput className={`form-control color-scheme-${theme} ${className} ${disabled && 'disabled'}`}
                  style={styles}
                  value={value}
                  onChange={(value) => onChange(value)}
                  // onBlur={() => setIsEditing(false)}
                  // onSelect={(e: BaseSyntheticEvent) => e.target.select()}
                  pattern="^-?\d+\.?\d*"
                  disabled={disabled}
                />
                : <Form.Control
                  className={`${className} ${disabled && 'disabled'}`}
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
                  className={`${disabled && 'disabled'}`}
                  style={styles}
                  type={type}
                  value={value === 0 ? '' : value}
                  onChange={(e) => onChange(e.target.value)}
                  disabled={disabled}
                />
              )
          }
        })()
      }
    </>
  )
}

export default LocalizedInput
