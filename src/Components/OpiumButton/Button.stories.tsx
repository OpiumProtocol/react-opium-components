import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const button = () => {
  const message = text('Text', 'OpiumButton')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const [label, setLabel] = useState<ETheme>(ETheme.DARK)

  const handleClick = () => {
    if (theme === ETheme.LIGHT) {
      setTheme(ETheme.DARK)
      setLabel(ETheme.DARK)
    }
    if (theme === ETheme.DARK) {
      setTheme(ETheme.LIGHT)
      setLabel(ETheme.LIGHT)
    }
  }

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label={`${label} is on`}
          variant={'primary'}
          style={{ margin: '1rem' }}
          onClick={handleClick}
        />
      </div>
      <div style={{ margin: '15px 0 10px 0' }}>
        <Button
          theme={theme}
          variant={'secondary'}
          label={'secondary red'}
          className="red"
          style={{ margin: '1rem' }}
          onClick={() => { }}
          size="sm"
        />
        <Button
          theme={theme}
          variant={'secondary'}
          label={'secondary green'}
          className="green"
          style={{ margin: '1rem' }}
          onClick={() => { }}
          size="md"
        />
        <Button
          theme={theme}
          variant={'secondary'}
          label={'secondary blue'}
          className="blue"
          style={{ margin: '1rem' }}
          onClick={() => { }}
          size="lg"
        />
      </div>
      <div style={{ margin: '15px 0 30px 0' }}>
        <Button
          theme={theme}
          variant={'secondary'}
          label={'secondary red'}
          className="red"
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
          size="sm"
        />
        <Button
          theme={theme}
          variant={'secondary'}
          label={'secondary green'}
          className="green"
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
          size="md"
        />
        <Button
          theme={theme}
          variant={'secondary'}
          label={'secondary blue'}
          className="blue"
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
          size="lg"
        />
      </div>
      <div style={{ margin: '15px 0 30px 0' }}>
        <Button
          theme={theme}
          variant={'primary'}
          label={'Primary Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
        />
        <Button
          theme={theme}
          variant={'secondary'}
          label={'Secondary Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
        />
        <Button
          theme={theme}
          variant={'danger'}
          label={'Danger Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
        />
      </div>
      <div style={{ margin: '15px 0 30px 0' }}>
        <Button
          theme={theme}
          variant={'primary'}
          label={'Primary Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
        />
        <Button
          theme={theme}
          variant={'secondary'}
          label={'Secondary Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
        />
        <Button
          theme={theme}
          variant={'danger'}
          label={'Danger Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
        />
      </div>
      <div style={{ margin: '15px 0 30px 0' }}>
        <Button
          theme={theme}
          variant={'success'}
          label={'Success Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
        />
        <Button
          theme={theme}
          variant={'warning'}
          label={'Warning Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
        />
        <Button
          theme={theme}
          variant={'rainbow'}
          label={'Rainbow button'}
          className="rainbow"
          style={{ margin: '1rem' }}
          onClick={() => { }}
        />
      </div>
      <div style={{ margin: '15px 0 30px 0' }}>
        <Button
          theme={theme}
          variant={'success'}
          label={'Success Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
        />
        <Button
          theme={theme}
          variant={'warning'}
          label={'Warning Button'}
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
        />
        <Button
          theme={theme}
          variant={'rainbow'}
          label={'Rainbow button'}
          className="rainbow"
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
        />
      </div>
      <div style={{ margin: '15px 0 30px 0' }}>
        <Button
          theme={theme}
          variant={'minimal'}
          label={'Minimal button'}
          className="minimal"
          style={{ margin: '1rem' }}
          onClick={() => { }}
        />
      </div>
      <div style={{ margin: '15px 0 30px 0' }}>
        <Button
          theme={theme}
          variant={'minimal'}
          label={'Minimal button'}
          className="minimal"
          style={{ margin: '1rem' }}
          onClick={() => { }}
          disabled
        />
      </div>
    </div>
  )
}

Button.defaultProps = {
  theme: ETheme.DARK,
  className: '',
  variant: 'primary',
  label: '',
  style: {},
  onClick: () => { },
}

export default {
  title: 'OpiumButton',
  decorators: [withKnobs],
  component: Button,
}
