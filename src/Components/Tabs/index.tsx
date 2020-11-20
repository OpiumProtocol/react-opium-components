import React, { FC, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { Theme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './Tabs.scss'

interface Props {
  theme: Theme
  items?: {
    title: string,
    eventKey: string,
    content: JSX.Element,
  }[]
}

const defaultProps: Props = {
  theme: Theme.DARK,
  items: [
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
  ]
}

const TabsComponent: FC<Props> = (props: Props) => {
  const [activeTabKey, setActiveTabKey] = useState<string>('tab1')

  const renderProps = generateRenderProps(defaultProps, props)

  const { items, theme } = renderProps

  const tabItems = items.map((item) => {
    const { title, eventKey, content } = item
    return (
      < Tab
        key={uuidv4()}
        title={title}
        eventKey={eventKey}
        className={`color-scheme-${theme}`}
      >
        {content}
      </Tab>
    )
  })

  return (
    <div>
      <Tabs
        id="opium-tabs-component"
        activeKey={activeTabKey}
        className={`color-scheme-${theme}`}
        onSelect={(key: string) => setActiveTabKey(key)}
      >
        {tabItems}
      </Tabs>
    </div>
  )
}

export default TabsComponent
