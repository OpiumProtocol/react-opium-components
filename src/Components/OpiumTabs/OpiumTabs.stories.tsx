import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { withKnobs, text } from '@storybook/addon-knobs'

import OpiumTabs from './index'
import Button from '../OpiumButton'

import { Theme } from '../../Constants/Types/theme.types'

export const opiumTabs = () => {
  const message = text('Text', 'OpiumTabs')

  const [theme, setTheme] = useState<Theme>(Theme.DARK)

  const items = [
    {
      title: 'Tab1',
      eventKey: 'tab1',
      content: <p key={uuidv4()}>Tab1 content</p>
    },
    {
      title: 'Tab2',
      eventKey: 'tab2',
      content: <p key={uuidv4()}>Tab2 content</p>
    },
    {
      title: 'Tab3',
      eventKey: 'tab3',
      content: <p key={uuidv4()}>Tab3 content</p>
    },
    {
      title: 'Tab4',
      eventKey: 'tab4',
      content: <p key={uuidv4()}>Tab4 content</p>
    },
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
      <OpiumTabs theme={theme} items={items} />
    </div>
  )
}

OpiumTabs.defaultProps = {
  theme: Theme.DARK,
  items: [],
}

export default {
  title: 'OpiumTabs component',
  decorators: [withKnobs],
  component: OpiumTabs,
  parameters: {},
}
