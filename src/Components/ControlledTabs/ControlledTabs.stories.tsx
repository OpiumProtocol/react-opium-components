import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import OpiumControlledTabs from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const ControlledTabs = () => {
  const message = text('Text', 'ControlledTabs')

  const tabs = [
    { id: 'tab-1', title: 'Tab 1' },
    { id: 'tab-2', title: 'Tab 2' },
    { id: 'tab-3', title: 'Foo' },
    { id: 'tab-4', title: 'Bar' },
  ]

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [activeTabId, setActiveTabId] = useState(tabs[1].id)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const switchTab = (newTabId: string) => setActiveTabId(newTabId)

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

      <OpiumControlledTabs
        theme={theme}
        tabs={tabs}
        activeTabId={activeTabId}
        disabledTabIds={['tab-4']}
        switchTab={switchTab}
      />
    </div>
  )
}

export default {
  title: 'ControlledTabs component',
  decorators: [withKnobs],
  component: ControlledTabs,
  parameters: {},
}
