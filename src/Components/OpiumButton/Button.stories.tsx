import React, { useState } from 'react'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import Button from './index'

import { ETheme } from '../../Constants/Types/theme.types'

import colors from '../../Styles/exportColors.scss'

export const button = () => {
  const message = text('Text', 'OpiumButton')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [label, setLabel] = useState<ETheme>(ETheme.DARK)

  const handleClick = () => {
    if (theme === ETheme.LIGHT) {
      setTheme(ETheme.DARK)
      setLabel(ETheme.DARK)
    }
    if (theme === ETheme.DARK) {
      setTheme(ETheme.LIGHT)
      setLabel(ETheme.LIGHT)
    }
  }

  const backgroundColor = theme === ETheme.DARK ? colors.darkgray1 : colors.white0
  const color = theme === ETheme.DARK ? colors.gray5 : colors.darkgray1

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label={label}
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={handleClick}
        />
      </div>
      <Button
        theme={theme}
        variant='primary'
        label={'Primary Button'}
        style={{ marginRight: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant='secondary'
        label={'Secondary Button'}
        style={{ marginRight: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant='danger'
        label={'Danger Button'}
        style={{ marginRight: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant='success'
        label={'Success Button'}
        style={{ marginRight: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant='warning'
        label={'Warning Button'}
        onClick={() => { }}
      />
    </div>
  )
}

Button.defaultProps = {
  theme: ETheme.DARK,
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
