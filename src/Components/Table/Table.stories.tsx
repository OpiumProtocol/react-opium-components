import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { withKnobs, text } from '@storybook/addon-knobs'

import Table from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const table = () => {
  const message = text('Text', 'Table')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

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
      <Table
        theme={theme}
        thead={tableHead}
        tbody={tableBody}
        rowHeight='xl'
        headHeight='xs'
        className={''}
        bodyScrollHeight={260}
      />
    </div>
  )
}

Table.defaultProps = {
  theme: ETheme.DARK,
  thead: [],
  tbody: [[]],
  className: '',
  bodyScrollHeight: '200',
}

export default {
  title: 'Table component',
  decorators: [withKnobs],
  component: Table,
  parameters: {},
}
