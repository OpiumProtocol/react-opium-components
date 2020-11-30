import React, { FC, useState, BaseSyntheticEvent } from 'react'
import { Form } from 'react-bootstrap'

import { ETheme } from '../../Constants/Types/theme.types'
import { LocalizedInputType } from '../../Constants/Types/LocalizedInput.types'

import { generateRenderProps } from '../../Utils/helpers'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Define input type */
  type?: LocalizedInputType
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
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  type: 'text',
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
  const { type, theme, value, locale, onChange, className } = renderProps

  return (
    <>
      {
        (() => {
          switch (type) {
            case 'number':
              return isEditing
                ? <Form.Control
                  className={`color-scheme-${theme} ${className}`}
                  type="number"
                  value={value === 0 ? '' : value}
                  onChange={(e) => onChange(+e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  onSelect={(e: BaseSyntheticEvent) => e.target.select()}
                />
                : <Form.Control
                  className={`color-scheme-${theme} ${className}`}
                  type="text"
                  value={localize(value, locale)}
                  onChange={(e) => onChange(+e.target.value)}
                  onFocus={() => setIsEditing(true)}
                  onSelect={(e: BaseSyntheticEvent) => e.target.select()}
                />

            default:
              return (
                <Form.Control
                  className={`color-scheme-${theme}`}
                  type={type}
                  value={value === 0 ? '' : value}
                  onChange={(e) => onChange(e.target.value)}
                />
              )
          }
        })()
      }
    </>
  )
}

export default LocalizedInput
