import React from 'react'
import Button from './index'

import { withKnobs, text } from '@storybook/addon-knobs'

export const button = () => {
  const message = text('Text', 'Click me now!')
  return <Button text={message} onClick={() => {}}></Button>
}

export default { title: 'Button component', decorators: [ withKnobs ] }
