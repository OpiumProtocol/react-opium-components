import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import InfoBlock from './index'
import Button from '../OpiumButton'

import { ETheme } from '../../Constants/Types/theme.types'

import colors from '../../Styles/exportColors.scss'

export const textBlock = () => {
  const message = text('Text', 'TextBlock')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const styles = {
    color: 'darkred',
    backgroundColor: 'white',
    border: '1px darkred solid',
    borderRadius: '5px',
  }

  const content = [
    'Initial text line one',
    'Initial text line two',
  ]

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
      <InfoBlock
        theme={theme}
        content={content}
        variant='info'
      />
    </div>
  )
}

InfoBlock.defaultProps = {
  theme: ETheme.DARK,
  content: [],
}

export default {
  title: 'InfoBlock component',
  decorators: [withKnobs],
  component: InfoBlock,
  parameters: {},
}
