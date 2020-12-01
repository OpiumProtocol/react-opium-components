import React, { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import _ from '../../Styles/exportColors.scss'


import Button from '../OpiumButton'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

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
  const { currentValue, items, theme, onClick, className, uncontrolled, disabled } = renderProps

  const [currentVal, setCurrentVal] = useState('')

  const renderColor = (val: string) => {
    if (val === currentVal || val === currentValue) return _.blue1
    return _.gray3
  }

  const uncontrolledClick = (val: string) => {
    setCurrentVal(val)
  }

  return (
    <div className="segments">
      {
        items.length && items.map(({ label, value }: any) => (
          <Button
            key={uuidv4()}
            theme={theme}
            label={label}
            className={`segmentsItem ${className}`}
            style={{ color: renderColor(value), borderColor: renderColor(value) }}
            onClick={uncontrolled ? () => uncontrolledClick(value) : () => onClick(value)}
            disabled={disabled}
          />
        ))
      }
    </div>
  )
}

export default Segments
