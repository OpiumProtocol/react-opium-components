import React, { useState } from 'react'
import Segments from './index'

import { withKnobs, text } from '@storybook/addon-knobs'

export const segments = () => {
  text('Text', 'Segments!')

  const [currentValue, setCurrentValue] = useState('')

  const items = [
    { text: 'First', value: '1' },
    { text: 'Second', value: '2' },
    { text: 'Third', value: '3' },
    // { text: 'Fourth', value: '4' },
  ]

  return (
    <Segments
      items={items}
      currentValue={currentValue}
      onClick={(val: string) => setCurrentValue(val)}
    />
  )
}

export default { title: 'Segments component', decorators: [withKnobs] }
