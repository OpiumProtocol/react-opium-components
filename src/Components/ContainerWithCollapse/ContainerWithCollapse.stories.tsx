import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

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
      content: 'hidden content 123'
    },
    {
      id: 1,
      content: 'hidden content 234'
    },
    {
      id: 2,
      content: 'hidden content 345'
    },
  ]
  const [togglerArr, setTogglerArr] = React.useState<{id: number, toggle: boolean}[]>([{id: 0, toggle: false}])

  React.useEffect(() => {
    const newArr: {id: number, toggle: boolean}[] = []
    for(const item of componentsArr) {
      const obj: {id: number, toggle: boolean} = {id: item.id, toggle: false}

      newArr.push(obj)
    }
    setTogglerArr([...newArr])
  }, [])

  const toggler = (e: React.MouseEvent, id: number) => {
    e.preventDefault()

    // @ts-ignore
    for(const [i, item] of togglerArr.entries()) {
      if (item.id === id) {
        const newArr = [...togglerArr]
        newArr[i].toggle = !newArr[i].toggle
        setTogglerArr([...newArr])
        break
      }
    }
  }

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
            return (
              <ContainerWithCollapse
                key={el.id.toString()}
                theme={theme}
                header={(
                  <a href="#" onClick={(e) => toggler(e, el.id)}>Click</a>
                )}
                body={(
                  <div className={`hidden-content ${togglerArr[i] ? togglerArr[i].toggle ? 'show' : '' : ''}`}>{el.content}</div>
                )}
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
