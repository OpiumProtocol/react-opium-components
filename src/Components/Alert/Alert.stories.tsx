import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Alert from './index'
import Button from '../OpiumButton'

import { ETheme } from '../../Constants/Types/theme.types'

import colors from '../../Styles/exportColors.scss'

export const alert = () => {
  const message = text('Text', 'Alert')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [checkBoxChecked, setCheckBoxChecked] = useState(false)  

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
      <Button theme={theme} label="Show / hide alert" onClick={() => setPopupIsOpen(!popupIsOpen)} />
      <Alert
        theme={theme}
        title='Alert title'
        size='lg'
        description='Description. Lorem lorem'
        attention={true}
        loading={true}
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
    </div>
  )
}

// Alert.defaultProps = {
//   theme: ETheme.DARK,
//   title: '',
//   size: 'sm',
//   description: '',
//   attention: false,
//   loading: false,
//   closePopup: () => { },
//   popupIsOpen: false,
//   showActionButton: true,
//   handleAction: () => { },
//   actionButtonTitle: '',
//   cancelButtonTitle: '',
//   showCheckBox: true,
//   handleCheckBoxChange: () => { },
//   checkBoxChecked: true,
//   checkBoxLabel: '',
//   hideCross: false,
// }

export default {
  title: 'Alert component',
  decorators: [withKnobs],
  component: Alert,
  parameters: {},
}
