import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'

import { ETheme, EVariant, sectionThemes } from '../../Constants/Types/theme.types'

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
          variant={'secondary' as EVariant}
          style={{ margin: '1rem' }}
          onClick={handleClick}
        />
      </div>
      <Button
        theme={theme}
        variant={'primary' as EVariant}
        label={'Primary Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'secondary' as EVariant}
        label={'Secondary Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'danger' as EVariant}
        label={'Danger Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'success' as EVariant}
        label={'Success Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'warning' as EVariant}
        label={'Warning Button'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
      <Button
        theme={theme}
        variant={'danger' as EVariant}
        disabled={true}
        label={'I am danger, but disabled'}
        style={{ margin: '1rem' }}
        onClick={() => { }}
      />
    </div>
  )
}

Button.defaultProps = {
  theme: ETheme.DARK,
  className: '',
  variant: 'primary' as EVariant,
  label: '',
  style: {},
  onClick: () => { },
}

export default {
  title: 'OpiumButton',
  decorators: [withKnobs],
  component: Button,
}
