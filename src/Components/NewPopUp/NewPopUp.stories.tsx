import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import NewPopUp from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const newPopUp = () => {
  const message = text('Text', 'NewPopUp')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [popupIsOpen, setPopupIsOpen] = useState(false)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
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
      <Button theme={theme} label="Show New PopUp" onClick={() => setPopupIsOpen(!popupIsOpen)} />
      <NewPopUp
        theme={theme}
        title="Title"
        subtitle="subtitle"
        popupIsOpen={popupIsOpen}
        closePopup={() => setPopupIsOpen(false)}
        component={(
          <p>My content</p>
        )}
      />
    </div>
  )
}
export default {
  title: 'NewPopUp component',
  decorators: [withKnobs],
  component: NewPopUp,
  parameters: {},
}
