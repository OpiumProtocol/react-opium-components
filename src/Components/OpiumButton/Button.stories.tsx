import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

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

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label={`${label} is on`}
          variant={'primary'}
          style={{ margin: '1rem' }}
          onClick={handleClick}
        />
      </div>
      <Button
        theme={theme}
        variant={'primary'}
        label={'Primary Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'secondary'}
        label={'Secondary Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'danger'}
        label={'Danger Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'success'}
        label={'Success Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'warning'}
        label={'Warning Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'danger'}
        disabled={true}
        label={'I am danger, but disabled'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'rainbow'}
        label={'Rainbow button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'minimal'}
        label={'Minimal button'}
        style={{ margin: '1rem' }}
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
