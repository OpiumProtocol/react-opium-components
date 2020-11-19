import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Button from '../Button'

import { generateRenderProps } from '../../Utils/helpers'
import { Theme } from '../../Constants/Types/theme.types'

import styles from './Segments.module.scss'

interface Props {
  theme: Theme
  currentValue?: string
  items?: { text: string, value: string }[]
  onClick: (val: string) => void
}

const defaultProps: Props = {
  theme: Theme.LIGHT,
  currentValue: '',
  items: [
    { text: 'First', value: '1' },
    { text: 'Second', value: '2' },
  ],
  onClick: () => { },
}

const Segments: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { currentValue, items, theme, onClick } = renderProps

  const renderColor = (value) => {
    // if (value === currentValue) return '#18CBAB'
    if (value === currentValue) return '#E3000F'
    return '#b2b2b2'
  }

  return (
    <div className="segments">
      {
        items.map((el) => (
          <Button
            theme={theme}
            key={uuidv4()}
            text={el.text}
            className={styles.segmentsItem}
            onClick={() => onClick(el.value)}
            style={{ color: renderColor(el.value), borderColor: renderColor(el.value) }}
          />
        ))
      }
    </div>
  )
}

export default Segments
