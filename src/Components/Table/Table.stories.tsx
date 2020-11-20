import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { withKnobs, text } from '@storybook/addon-knobs'

import Table from './index'
import Button from '../Button'

import { Theme } from '../../Constants/Types/theme.types'

export const table = () => {
  const message = text('Text', 'Table')

  const [theme, setTheme] = useState<Theme>(Theme.DARK)

  const tableHead = [
    <span key={uuidv4()}>Head1</span>,
    <span key={uuidv4()}>Head2</span>,
    <span key={uuidv4()}>Head3</span>,
    <span key={uuidv4()}>Head4</span>,
  ]

  const tableBody = [
    [
      <span key={uuidv4()}>Cell 1-1</span>,
      <span key={uuidv4()}>Cell 1-2</span>,
      <span key={uuidv4()}>Cell 1-3</span>,
      <span key={uuidv4()}>Cell 1-4</span>,
    ],
    [
      <span key={uuidv4()}>Cell 2-1</span>,
      <span key={uuidv4()}>Cell 2-2</span>,
      <span key={uuidv4()}>Cell 2-3</span>,
      <span key={uuidv4()}>Cell 2-4</span>,
    ],
    [
      <span key={uuidv4()}>Cell 3-1</span>,
      <span key={uuidv4()}>Cell 3-2</span>,
      <span key={uuidv4()}>Cell 3-3</span>,
      <span key={uuidv4()}>Cell 3-4</span>,
    ],
  ]

  return (
    <div style={{ padding: '0 3rem' }}>
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
      <Table
        theme={theme}
        thead={tableHead}
        tbody={tableBody}
        className={''}
        bodyScrollHeight={260}
      />
    </div>
  )
}

export default { title: 'Table component', decorators: [withKnobs] }
