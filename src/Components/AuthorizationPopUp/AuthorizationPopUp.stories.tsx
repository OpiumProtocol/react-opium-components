import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import AuthorizationPopUp from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const authorizationPopUp = () => {
  const message = text('Text', 'AuthorizationPopUp')

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
      <Button theme={theme} label="Show / hide alert" onClick={() => setPopupIsOpen(!popupIsOpen)} />
      <AuthorizationPopUp
        theme={theme}
        list={[
          {
            name: 'Metamask',
            image: ''
          },
          {
            name: 'Other',
            image: ''
          },
          {
            name: 'Other Other',
            image: ''
          },
          {
            name: 'Other Other2',
            image: ''
          },
          {
            name: 'Other Other3',
            image: ''
          },
          {
            name: 'Other Other4',
            image: ''
          },
        ]}
        popupIsOpen={popupIsOpen}
        closePopup={() => setPopupIsOpen(false)}
      />
    </div>
  )
}
export default {
  title: 'AuthorizationPopUp component',
  decorators: [withKnobs],
  component: AuthorizationPopUp,
  parameters: {},
}
