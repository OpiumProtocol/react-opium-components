import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import SelectMultiple from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

const data = [
  {
    title: 'Ethereum',
    value: false
  },
  {
    title: 'Polygon',
    value: false
  },
  {
    title: 'Arbitrum',
    value: false
  }
]

export const SelectMultipleStory = () => {
  const message = text('Text', 'SelectMultiple')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value
  const [items, setItems] = useState(data)

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label="Light theme"
          variant={'secondary'}
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(ETheme.LIGHT)}
        />
        <Button
          theme={theme}
          label="Dark theme"
          variant={'primary'}
          onClick={() => setTheme(ETheme.DARK)}
        />
      </div>
      <SelectMultiple
        theme={theme}
        items={items}
        onSelect={() => {}}
        placeholder={'Chain'}
      />
    </div>
  )
}


export default {
  title: 'SelectMultiple component',
  decorators: [withKnobs],
  component: SelectMultipleStory,
  parameters: {},
}
