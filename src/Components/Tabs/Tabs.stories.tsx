import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { withKnobs, text } from '@storybook/addon-knobs'

import Tabs from './index'
import Button from '../Button'

import { Theme } from '../../Constants/Types/theme.types'

export const tabs = () => {
  const message = text('Text', 'Tabs')

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
      <Tabs theme={theme} items={items} />
    </>
  )
}

export default { title: 'Tabs component', decorators: [withKnobs] }
