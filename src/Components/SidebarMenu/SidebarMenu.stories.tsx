import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import DropDown from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'


export const SidebarMenuStory = () => {
  const message = text('Text', 'SidebarMenu')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const data = ['Key terms', 'Basic strategies', 'Options put', 'Strategies', 'Option 1', 'Option 2' ]
  
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
      <DropDown
        theme={theme}
        items={data}
        activeItem="Options put"
        onClick={(e: string) => {}}
      />
    </div>
  )
}


export default {
  title: 'SidebarMenu component',
  decorators: [withKnobs],
  component: SidebarMenuStory,
  parameters: {},
}
