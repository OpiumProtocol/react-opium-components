import React, { FC, useState, BaseSyntheticEvent } from 'react'
import { Form } from 'react-bootstrap'

import { Theme } from '../../Constants/Types/theme.types'
import { LokalizedInputType } from '../../Constants/Types/LokalizedInput.types'

import { generateRenderProps } from '../../Utils/helpers'

export type Props = {
  /** Define theme */
  theme: Theme
  /** Define input type */
  type?: LokalizedInputType
  /** Set lokale */
  locale?: string
  /** Set initial value */
  value?: string | number
  /** Function, that became active by submitting */
  onClick: () => void
  /** Function, that became active on input change */
  onChange: Function
}

const defaultProps: Props = {
  theme: Theme.DARK,
  type: 'text',
  locale: 'en',
  value: '',
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
  const { type, theme, value, locale, onChange } = renderProps

  return (
    <>
      {
        (() => {
          switch (type) {
            case 'number':
              return isEditing
                ? <Form.Control
                  className={`color-scheme-${theme}`}
                  type="number"
                  value={value === 0 ? '' : value}
                  onChange={(e) => onChange(+e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  onSelect={(e: BaseSyntheticEvent) => e.target.select()}
                />
                : <Form.Control
                  className={`color-scheme-${theme}`}
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
