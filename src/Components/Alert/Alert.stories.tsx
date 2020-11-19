import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Alert from './index'
import Button from '../Button'

import { Theme } from '../../Constants/Types/theme.types'

export const alert = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [checkBoxChecked, setCheckBoxChecked] = useState(false)
  
  const message = text('Text', 'Alert')

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          text="Light theme"
          variant='secondary'
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(Theme.LIGHT)}
        />
        <Button
          theme={theme}
          text="Dark theme"
          variant='primary'
          onClick={() => setTheme(Theme.DARK)}
        />
      </div>
      <Button theme={theme} text="Show / hide alert" onClick={() => setPopupIsOpen(!popupIsOpen)} />
      <Alert
        theme={theme}
        title='Alert title'
        size='lg'
        description='Description. Lorem lorem'
        attention={true}
        loading={false}
        closePopup={() => setPopupIsOpen(false)}
        popupIsOpen={popupIsOpen}
        showActionButton={true}
        handleAction={() => { }}
        actionButtonTitle='Action'
        cancelButtonTitle='Cancel'
        showCheckBox={true}
        handleCheckBoxChange={() => setCheckBoxChecked(!checkBoxChecked)}
        checkBoxChecked={checkBoxChecked}
        checkBoxLabel='Checkbox'
        hideCross={false}
      />
    </>
  )
}

export default { title: 'Alert component', decorators: [withKnobs] }
