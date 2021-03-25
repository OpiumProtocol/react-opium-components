import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import {
  useAccordionToggle
} from 'react-bootstrap'

import ContainerWithCollapse from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const containerWithCollapse = () => {
  const message = text('Text', 'ContainerWithCollapse')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  const componentsArr = [
    {
      id: 0,
      content: 'hidden content 123',
      headerText: 'Header hello!',
      accentColor: '#F6029C'
    },
    {
      id: 1,
      content: 'hidden content 234',
      headerText: 'Header hello!',
      accentColor: '#2ECD94'
    },
    {
      id: 2,
      content: 'hidden content 345',
      headerText: 'Header hello!',
      accentColor: '#fff'
    },
  ]

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
      <div className="ContainerWithCollapse">
        {
          componentsArr.map((el, i) => {

            const ToggleButton = () => (
              <button
                type="button"
                onClick={useAccordionToggle(i.toString())}
              >
                Click meee
              </button>
            )

            const headerContent = (
              <div>
                <p>{el.headerText}</p>
                <ToggleButton />
              </div>
            )

            return (
              <ContainerWithCollapse
                eventKey={i.toString()}
                key={el.id.toString()}
                theme={theme}
                accentColor={el.accentColor}
                header={headerContent}
                body={el.content}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default {
  title: 'ContainerWithCollapse component',
  decorators: [withKnobs],
  component: ContainerWithCollapse,
  parameters: {},
}