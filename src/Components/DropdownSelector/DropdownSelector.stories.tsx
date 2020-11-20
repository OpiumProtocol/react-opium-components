import React, { BaseSyntheticEvent, useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import DropdownSelector from './index'
import Button from '../OpiumButton'

import { Theme } from '../../Constants/Types/theme.types'

export const dropdownSelector = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)
  const message = text('Text', 'DropdownSelector')

  const items = [
    { text: 'First', value: '1' },
    { text: 'Second', value: '2' },
    { text: 'Third', value: '3' },
    { text: 'Fourth', value: '4' },
  ]

  return (
    <div style={{ padding: '0 3rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label="Light theme"
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(Theme.LIGHT)}
        />
        <Button
          theme={theme}
          label="Dark theme"
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
    </div>
  )
}

DropdownSelector.defaultProps = {
  theme: Theme.DARK,
  initialOption: '',
  items: [],
  onClick: () => { },
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
}

export default {
  title: 'DropdownSelector component',
  decorators: [withKnobs],
  component: DropdownSelector,
  parameters: {},
}
