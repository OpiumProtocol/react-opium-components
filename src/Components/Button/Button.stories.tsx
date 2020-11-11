import React from 'react'
import Button from './index'

import { withKnobs, text } from '@storybook/addon-knobs'

export const button = () => {
  const message = text('Text', 'Click here now!')
  return <Button message={message}></Button>
}

export default { title: 'Button component', decorators: [withKnobs]}