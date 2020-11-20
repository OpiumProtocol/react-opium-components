import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'
import { Theme } from '../../Constants/Types/theme.types'

export const button = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)
  const message = text('Text', 'Button')

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
      <Button theme={theme} text={message} onClick={() => { }} />
    </div>
  )
}

export default { title: 'Button component', decorators: [withKnobs] }
