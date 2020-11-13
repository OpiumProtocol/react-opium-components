import React, { FC, useState, BaseSyntheticEvent } from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  type?: string
  lokale?: string
  value?: string | number
  onClick: () => void
  onChange: Function
}

const defaultProps: Props = {
  type: 'text',
  lokale: 'en',
  value: 'Initial input text',
  onClick: () => {},
  onChange: () => {},
}

const generateRenderProps = (defaults: Props, props: Props): Props => {
  return { ...defaults, ...props }
}

const localize = (number: number | string, locale: string) => {
  const formatter = new Intl.NumberFormat(locale, { style: 'decimal' })
  return formatter.format(+number)
}

const LokalizedInput: FC<Props> = (props: Props) => {
  const [ isEditing, setIsEditing ] = useState<boolean>(false)

  const renderProps = generateRenderProps(defaultProps, props)
  const { type, value, lokale, onChange } = renderProps

  return (
    <>
      {
        (() => {
          switch (type) {
            case 'number':
              return isEditing
                ? <Form.Control
                  type="number"
                  value={value === 0 ? '' : value}
                  onChange={(e) => onChange(+e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  onSelect={(e: BaseSyntheticEvent) => e.target.select()}
                />
                : <Form.Control
                  type="text"
                  value={localize(value, lokale)}
                  onChange={(e) => onChange(+e.target.value)}
                  onFocus={() => setIsEditing(true)}
                  onSelect={(e: BaseSyntheticEvent) => e.target.select()}
                />

            default:
              return (
                <Form.Control
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
