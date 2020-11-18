import React from 'react'
import Loading from './index'

import { withKnobs, text } from '@storybook/addon-knobs'

export const loading = () => {
  text('Text', 'Loading!')

  return (
    <Loading />
  )
}

export default { title: 'Loading component', decorators: [withKnobs] }
