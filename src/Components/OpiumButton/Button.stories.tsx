import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'

import { Theme } from '../../Constants/Types/theme.types'

export const button = () => {
  const message = text('Text', 'OpiumButton')

  const [theme, setTheme] = useState<Theme>(Theme.DARK)

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
      <Button
        theme={theme}
        label={message}
        onClick={() => { }}
      />
    </div>
  )
}

Button.defaultProps = {
  theme: Theme.DARK,
  className: '',
  variant: 'primary',
  label: '',
  style: {},
  onClick: () => { },
}

export default {
  title: 'OpiumButton',
  decorators: [withKnobs],
  component: Button,
}
