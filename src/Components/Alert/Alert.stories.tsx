import React, { useState } from 'react'
import Alert from './index'

import { withKnobs, text } from '@storybook/addon-knobs'

export const dropdownSelector = () => {
  text('Text', 'Type text in!')

  const items = [
    { text: 'First', value: '1' },
    { text: 'Second', value: '2' },
    { text: 'Third', value: '3' },
    { text: 'Fourth', value: '4' },
  ]

  return (
    <Alert
      initialOption='Initial'
      items={items}
      onClick={() => {}}
      onSelect={() => {}}
    />
  )
}

export default { title: 'Alert component', decorators: [ withKnobs ] }
