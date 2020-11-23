import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Button from '../OpiumButton'

import { generateRenderProps } from '../../Utils/helpers'
import { Theme } from '../../Constants/Types/theme.types'

import './Segments.scss'

export type Props = {
  /** Define theme */
  theme: Theme
  /** Set active item */
  currentValue?: string
  /** Set items */
  items?: { label: string, value: string }[]
  /** Function, that fires active item */
  onClick: (val: string) => void
}

const defaultProps: Props = {
  theme: Theme.DARK,
  currentValue: '',
  items: [],
  onClick: () => { },
}

const Segments: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { currentValue, items, theme, onClick } = renderProps

  const renderColor = (value: string) => {
    // if (value === currentValue) return '#18CBAB'
    if (value === currentValue) return '#E3000F'
    return '#b2b2b2'
  }

  return (
    <div className="segments">
      {
        items.map((el: any) => (
          <Button
            theme={theme}
            key={uuidv4()}
            label={el.label}
            className='segmentsItem'
            onClick={() => onClick(el.value)}
            style={{ color: renderColor(el.value), borderColor: renderColor(el.value) }}
          />
        ))
      }
    </div>
  )
}

export default Segments
