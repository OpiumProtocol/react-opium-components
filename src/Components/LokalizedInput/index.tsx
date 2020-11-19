import React, { FC, useState, BaseSyntheticEvent } from 'react'
import { Form } from 'react-bootstrap'

import { Theme } from '../../Constants/Types/theme.types'
import { generateRenderProps } from '../../Utils/helpers'

interface Props {
  theme: Theme
  type?: string
  lokale?: string
  value?: string | number
  onClick: () => void
  onChange: Function
}

const defaultProps: Props = {
  theme: Theme.LIGHT,
  type: 'text',
  lokale: 'en',
  value: 'Initial input text',
  onClick: () => { },
  onChange: () => { },
}

const localize = (number: number | string, locale: string) => {
  const formatter = new Intl.NumberFormat(locale, { style: 'decimal' })
  return formatter.format(+number)
}

const LokalizedInput: FC<Props> = (props: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const renderProps = generateRenderProps(defaultProps, props)
  const { type, theme, value, lokale, onChange } = renderProps

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
                  value={localize(value, lokale)}
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

export default LokalizedInput
