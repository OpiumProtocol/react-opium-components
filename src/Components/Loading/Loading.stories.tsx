import React, { useState } from 'react'
import { LoadingType } from 'react-loading'
import { withKnobs, text } from '@storybook/addon-knobs'

import Loading from './index'
import Button from '../OpiumButton'

import { ETheme } from '../../Constants/Types/theme.types'

import colors from '../../Styles/exportColors.scss'

export const loading = () => {
  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const message = text('Text', 'Loading')

  const backgroundColor = theme === ETheme.DARK ? colors.darkgray1 : colors.white0
  const color = theme === ETheme.DARK ? colors.gray5 : colors.darkgray1

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label="Light theme"
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(ETheme.LIGHT)}
        />
        <Button
          theme={theme}
          label="Dark theme"
          variant='primary'
          onClick={() => setTheme(ETheme.DARK)}
        />
      </div>
      <Loading theme={theme} />
    </div>
  )
}

Loading.defaultProps = {
  theme: ETheme.DARK,
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
