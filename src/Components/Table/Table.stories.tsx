import React from 'react'
import Table from './index'
import { v4 as uuidv4 } from 'uuid'

import { withKnobs, text } from '@storybook/addon-knobs'

export const table = () => {
  text('Text', 'Table!')

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
    <Table
      thead={tableHead}
      tbody={tableBody}
      className={''}
      bodyScrollHeight={260}
    />
  )
}

export default { title: 'Table component', decorators: [withKnobs] }
