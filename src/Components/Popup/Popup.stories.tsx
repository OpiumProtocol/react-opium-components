import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Popup from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'
import Checkbox from '../Checkbox'

export const popup = () => {
  const message = text('Text', 'PopUp')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [warningPopupIsOpen, setWarningPopupIsOpen] = useState(false)

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
      <Button theme={theme} label="Show PopUp" onClick={() => setPopupIsOpen(!popupIsOpen)} style={{ marginRight: '15px' }} />
      <Button theme={theme} label="Show Warning PopUp" onClick={() => setWarningPopupIsOpen(!warningPopupIsOpen)} />
      <Popup
        theme={theme}
        title="Title"
        subtitle="subtitle"
        popupIsOpen={popupIsOpen}
        closePopup={() => setPopupIsOpen(false)}
        component={(
          <p>My content</p>
        )}
      />
      <Popup
        theme={theme}
        warningTitle="Warning"
        showWarningIcon={false}
        popupIsOpen={warningPopupIsOpen}
        closePopup={() => setWarningPopupIsOpen(false)}
        component={(
          <div>
            <p>The sllipage is hign on the secondary market. By proceeding with the transaction, you may lose some money.
            You can redeem your position during rebalancing phase without slippage if you are willing to wait.</p>
            <div style={{ marginBottom: '36px' }}>
              <Checkbox
                theme={theme}
                onChange={() => {}}
                label="Do not show this massage again"
              />
            </div>
            <Button
              theme={theme}
              variant="secondary"
              className="green"
              size="sm"
              label="proceed"
              onClick={() => {}}
              style={{ width: 'calc(50% - 16px)', marginRight: '32px' }}
            />
            <Button
              theme={theme}
              variant="secondary"
              size="sm"
              label="cancel"
              onClick={() => setWarningPopupIsOpen(false)}
              style={{ width: 'calc(50% - 16px)' }}
            />
          </div>
        )}
      />
    </div>
  )
}
export default {
  title: 'Popup component',
  decorators: [withKnobs],
  component: Popup,
  parameters: {},
}
