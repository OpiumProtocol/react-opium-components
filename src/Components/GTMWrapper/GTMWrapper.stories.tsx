import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import GTMWrapper from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const gtmWrapper = () => {
  const message = text('Text', 'GTM Wrapper')

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
          variant={'secondary'}
          style={{ marginRight: '1rem' }}
          onClick={handleClick}
        />
      </div>
      <Button
        theme={theme}
        variant={'primary'}
        label="Without GTMWrapper"
        style={{ marginRight: '1rem' }}
        onClick={() => { }}
      />
      <GTMWrapper id="seo-wrapped-component" isProduction={true}>
        <Button
          theme={theme}
          label="With GTMWrapper"
          variant={'primary'}
          onClick={() => { }} />
      </GTMWrapper>
    </div>
  )
}

GTMWrapper.defaultProps = {
  id: 'ceo-wrapped-component',
  children: <></>,
  isProduction: false,
}

export default {
  title: 'GTMWrapper',
  decorators: [withKnobs],
  component: GTMWrapper,
}
