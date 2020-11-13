import React, { useState } from 'react'
import LokalizedInput from './index'

import { withKnobs, text } from '@storybook/addon-knobs'

export const lokalizedInput = () => {
  const [ string, setString ] = useState<string>(text('Text', 'Type text in!'))
  const [ number, setNumber ] = useState<number>(0)

  const handleChange = (value: string|number) => {
    if (typeof value === 'string') setString(value)
    if (typeof value === 'number') setNumber(value)
  }

  const setValue = () => {
    return type === 'text' || !type ? string : number
  }

  const type: string = 'text'

  return (
    <LokalizedInput
      type={type}
      value={setValue()}
      onClick={() => {}}
      onChange={handleChange}
    />
  )
}

export default { title: 'Input component', decorators: [ withKnobs ] }
