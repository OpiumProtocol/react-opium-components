import React, { FC } from 'react'
import Button from '../Button'
import { v4 as uuidv4 } from 'uuid'

import { generateRenderProps } from '../../Utils/helpers'

import styles from './Segments.module.scss'

interface Props {
  currentValue?: string
  items?: { text: string, value: string }[]
  onClick: (val: string) => void
}

const defaultProps: Props = {
  currentValue: '',
  items: [
    { text: 'First', value: '1' },
    { text: 'Second', value: '2' },
  ],
  onClick: () => { },
}

const Segments: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { currentValue, items, onClick } = renderProps

  const renderColor = (value) => {
    // if (value === currentValue) return '#18CBAB'
    if (value === currentValue) return '#E3000F'
    return '#b2b2b2'
  }

  return (
    <div className={styles.segments}>
      {
        items.map((el) => (
          <Button
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
