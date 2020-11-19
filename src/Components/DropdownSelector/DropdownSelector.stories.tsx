import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import DropdownSelector from './index'
import Button from '../Button'

import { Theme } from '../../Constants/Types/theme.types'

export const dropdownSelector = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
  const message = text('Text', 'DropdownSelector')

  const items = [
    { text: 'First', value: '1' },
    { text: 'Second', value: '2' },
    { text: 'Third', value: '3' },
    { text: 'Fourth', value: '4' },
  ]

  return (
    <>
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
      <DropdownSelector
        theme={theme}
        initialOption='Initial'
        items={items}
        onClick={() => { }}
        onSelect={() => { }}
      />
    </>
  )
}

export default { title: 'DropdownSelector component', decorators: [withKnobs] }
