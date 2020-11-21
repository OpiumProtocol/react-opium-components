import React, { useState } from 'react'
import { LoadingType } from 'react-loading'
import { withKnobs, text } from '@storybook/addon-knobs'

import Loading from './index'
import Button from '../OpiumButton'

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
      <Loading theme={theme} />
    </div>
  )
}

Loading.defaultProps = {
  theme: Theme.DARK,
  className: 'loading',
  color: '',
  height: '4rem',
  width: '6rem',
  type: 'bubbles' as LoadingType,
}

export default { 
  title: 'Loading component', 
  decorators: [withKnobs],
  component: Loading,
  parameters: {},
}
