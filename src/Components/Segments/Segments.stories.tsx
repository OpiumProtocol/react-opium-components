import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Segments from './index'
import Button from '../Button'

import { Theme } from '../../Constants/Types/theme.types'

export const segments = () => {
  const message = text('Text', 'Segments')

  const [theme, setTheme] = useState<Theme>(Theme.DARK)

  const [currentValue, setCurrentValue] = useState('')

  const items = [
    { text: 'First', value: '1' },
    { text: 'Second', value: '2' },
    { text: 'Third', value: '3' },
    // { text: 'Fourth', value: '4' },
  ]

  return (
    <div style={{ padding: '0 3rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          text="Light theme"
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(Theme.LIGHT)}
        />
        <Button
          theme={theme}
          text="Dark theme"
          variant='primary'
          onClick={() => setTheme(Theme.DARK)}
        />
      </div>
      <Segments
        theme={theme}
        items={items}
        currentValue={currentValue}
        onClick={(val: string) => setCurrentValue(val)}
      />
    </div>
  )
}

export default { title: 'Segments component', decorators: [withKnobs] }
