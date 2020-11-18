import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Alert from './index'
import Button from '../Button'

import { generateThemeColors } from '../../Utils/helpers'

import {
  Theme,
  Colors,
  colorSchemeDark,
  colorSchemeLight,
} from '../../Constants/Types/theme.types'

export const alert = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [checkBoxChecked, setCheckBoxChecked] = useState(false)
  text('Text', 'Alert!')

  return (
    <>
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
