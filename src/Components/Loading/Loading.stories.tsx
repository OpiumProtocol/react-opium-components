import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Loading from './index'
import Button from '../Button'

import { Theme } from '../../Constants/Types/theme.types'

export const loading = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)
  const message = text('Text', 'Loading')

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
      <Loading theme={theme} />
    </div>
  )
}

export default { title: 'Loading component', decorators: [withKnobs] }
