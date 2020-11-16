import React from 'react'
import Tabs from './index'
import { v4 as uuidv4 } from 'uuid'

import { withKnobs, text } from '@storybook/addon-knobs'

export const tabs = () => {
  text('Text', 'Type text in!')

  const items = [
    {
      title: 'Tab1',
      eventKey: 'tab1',
      content: <p key={uuidv4()}>Tab1 content</p>
    },
    {
      title: 'Tab2',
      eventKey: 'tab2',
      content: <p key={uuidv4()}>Tab2 content</p>
    },
    {
      title: 'Tab3',
      eventKey: 'tab3',
      content: <p key={uuidv4()}>Tab3 content</p>
    },
    {
      title: 'Tab4',
      eventKey: 'tab4',
      content: <p key={uuidv4()}>Tab4 content</p>
    },
  ]

  return (
    <Tabs items={items} />
  )
}

export default { title: 'Tabs component', decorators: [withKnobs] }
