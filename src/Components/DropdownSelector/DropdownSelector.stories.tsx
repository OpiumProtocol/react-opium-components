import React, { useState } from 'react'
import DropdownSelector from './index'

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
    <DropdownSelector
      initialOption='Initial'
      items={items}
      onClick={() => {}}
      onSelect={() => {}}
    />
  )
}

export default { title: 'DropdownSelector component', decorators: [ withKnobs ] }
