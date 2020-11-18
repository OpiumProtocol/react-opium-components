import React, { FC, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import { generateRenderProps } from '../../Utils/helpers'

import './Tabs.scss'

interface Props {
  items?: {
    title: string,
    eventKey: string,
    content: JSX.Element,
  }[]
}

const defaultProps: Props = {
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
  const [ activeTabKey, setActiveTabKey ] = useState<string>('tab1')

  const renderProps = generateRenderProps(defaultProps, props)

  const { items } = renderProps

  const tabItems = items.map((item) => {
    const { title, eventKey, content } = item
    return (
      < Tab key={uuidv4()} eventKey={eventKey} title={title}>{content}</Tab>
    )
  })

  return (
    <div>
      <Tabs
        id="opium-tabs-component"
        activeKey={activeTabKey}
        onSelect={(key: string) => setActiveTabKey(key)}
      >
        {tabItems}
      </Tabs>
    </div>
  )
}

export default TabsComponent