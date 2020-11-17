import React from 'react'
import TextBlock from './index'

import { withKnobs, text } from '@storybook/addon-knobs'

export const textBlock = () => {
  const message = text('Text', 'Click me now!')

  const styles = {
    color: 'red',
    backgroundColor: 'lightgrey',
    border: '2px blue solid',
    borderRadius: '5px',
  }

  return (
    <TextBlock
      // content={message}
      // textStyles={styles}
    />)
}

export default { title: 'TextBlock component', decorators: [withKnobs] }
