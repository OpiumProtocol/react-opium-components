import { text, withKnobs } from '@storybook/addon-knobs'
import SlideMenu from './index'
import React, { useState } from 'react'
import { ETheme, sectionThemes } from '../..'
import Button from '../OpiumButton'

export const slideMenu = () => {
  const message = text('Text', 'Slide menu')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [status, setStatus] = useState<boolean>(false)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  return (<div style={{ padding: '3rem', backgroundColor }}>
    <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
    <div style={{ display: 'flex', marginBottom: '5rem' }}>
      <Button
        theme={theme}
        label="Light theme"
        variant={'secondary'}
        style={{ marginRight: '1rem' }}
        onClick={() => setTheme(ETheme.LIGHT)}
      />
      <Button
        theme={theme}
        label="Dark theme"
        variant={'primary'}
        onClick={() => setTheme(ETheme.DARK)}
      />
    </div>
    <SlideMenu id={'test'} theme={theme}
      closeButton
      open={status}
      onClick={() => setStatus(false)}
      header={<div style={{ width: '100%', textAlign: 'center' }}>
        <button onClick={() => setStatus(true)}>Open slider</button>
      </div>}
      content={<div style={{ width: '100%', textAlign: 'center' }}>Body</div>}
      headerHeight={'55px'}
    />
  </div>)
}

export default {
  title: 'Slide menu component',
  decorators: [withKnobs],
  component: SlideMenu,
  parameters: {},
}
