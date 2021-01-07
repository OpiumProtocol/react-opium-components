import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Alert from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const alert = () => {
  const message = text('Text', 'Alert')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [checkBoxChecked, setCheckBoxChecked] = useState(false)

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
      <Alert
        theme={theme}
        title='Alert title'
        size='lg'
        description='Please bear in mind that by providing liquidity on Opium, you are agreeing to certain risks. The base of Opium Staking was audited by Pessimistic and MixBytes, however there are some additional features that are being audited at the moment. As soon as audit is over, we will release it for public. Please remember that audit does not give you 100% guarantee that there would be no exploits. Currently Opium Staking is in beta and you are using it ar your own risk.'
        attention={true}
        closePopup={() => setPopupIsOpen(false)}
        popupIsOpen={popupIsOpen}
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
