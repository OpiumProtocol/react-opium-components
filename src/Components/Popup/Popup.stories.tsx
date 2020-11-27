import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Popup from './index'
import Button from '../OpiumButton'

import { ETheme } from '../../Constants/Types/theme.types'

import colors from '../../Styles/exportColors.scss'

export const popup = () => {
  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [popupIsOpen, setPopupIsOpen] = useState(false)

  const message = text('Text', 'Popup')

  const handleClick = () => {
    setPopupIsOpen(!popupIsOpen)
  }

  const renderJSX = () => {
    return (
      <div>
        <h1>Heading 1</h1>
        <p style={{ color: 'red' }}>Red Coloured Text</p>
        <p>Some text...</p>
      </div >
    )
  }

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
      <Button theme={theme} label="Show / hide popup" onClick={handleClick} />
      <Popup
        theme={theme}
        size='lg'
        title='Title'
        component={renderJSX()}
        hideCross={false}
        closePopup={() => setPopupIsOpen(false)}
        popupIsOpen={popupIsOpen}
        handleAction={() => { }}
        showActionButton={false}
        showCancelButton={true}
        actionButtonTitle='Action'
        cancelButtonTitle='Cancel'
      />
    </div>
  )
}

Popup.defaultProps = {
  theme: ETheme.DARK,
  size: 'sm',
  title: '',
  component: '',
  hideCross: false,
  closePopup: () => { },
  popupIsOpen: false,
  handleAction: () => { },
  showActionButton: true,
  showCancelButton: true,
  actionButtonTitle: '',
  cancelButtonTitle: '',
}

export default {
  title: 'Popup component',
  decorators: [withKnobs],
  component: Popup,
  parameters: {},
}
