import React, { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Button from '../OpiumButton'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, themes, TVariant } from '../../Constants/Types/theme.types'

import './Segments.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set items */
  items?: { label: string, value: string }[]
  /** Set active item value */
  currentValue?: string
  /** Function, that fires active item */
  onClick?: (val: string) => void
  /** Set class selectors */
  className?: string
  /** Set component uncontrolled */
  uncontrolled?: boolean
  /** Disabled flag */
  disabled?: boolean
  /** Set button variant */
  variant?: TVariant
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  currentValue: '',
  items: [
    { label: 'First', value: '1' },
    { label: 'Second', value: '2' },
  ],
  onClick: () => { },
  className: ''
}

const Segments: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { currentValue, items, theme, variant, onClick, className, uncontrolled, disabled } = renderProps

  const [hover, setHover] = useState<boolean>(false)
  const [currentVal, setCurrentVal] = useState<string>('')

  const { color, backgroundColor, borderColor } = themes[theme as ETheme]

  const styled = {
    color: color[variant as TVariant].value,
    backgroundColor: backgroundColor[variant as TVariant].value,
    borderColor: borderColor[variant as TVariant].value,
    borderStyle: 'solid',
    borderRadius: 'unset',
  }

  const hovered = {
    color: color[variant as TVariant].hover,
    backgroundColor: backgroundColor[variant as TVariant].hover,
    borderColor: borderColor[variant as TVariant].hover,
    borderStyle: 'solid',
    borderRadius: 'unset'
  }

  const styleItem = (val: string) => {
    if (hover && (val === currentVal || val === currentValue)) return hovered
    if (val === currentVal || val === currentValue) return hovered
    return styled
  }

  const uncontrolledClick = (val: string) => {
    setCurrentVal(val)
  }

  const handleEnter = (value: string) => {
    setCurrentVal(value)
    setHover(true)
  }

  const handleLeave = () => {
    setCurrentVal('')
    setHover(false)
  }

  return (
    <div className={`segments ${className}`}>
      {
        items.length && items.map(({ label, value }: any, idx: number) => (
          <Button
            key={uuidv4()}
            label={label}
            theme={theme}
            variant={variant}
            className='segments-item'
            style={styleItem(value)}
            onClick={uncontrolled ? () => uncontrolledClick(value) : () => onClick(value)}
            disabled={disabled}
            onMouseEnter={() => handleEnter(value)}
            onMouseLeave={() => handleLeave()}
          />
        ))
      }
    </div>
  )
}

export default Segments
