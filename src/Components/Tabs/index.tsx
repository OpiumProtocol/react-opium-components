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
  const [activeTabKey, setActiveTabKey] = useState<string>('tab1')

  const renderProps = generateRenderProps(defaultProps, props)

  const { items } = renderProps

  const tabItems = items.map((item) => {
    const { title, eventKey, content } = item
    return (
      < Tab key={uuidv4()} eventKey={eventKey} title={title}>{content}</Tab>
    )
  })

  return (
    <div className="history step-7 step-8">
      <Tabs
        id="uncontrolled-tab-example"
        activeKey={activeTabKey}
        onSelect={(key: string) => setActiveTabKey(key)}
      >
        {/* <Tab eventKey="tab1" title={'Tab1'}>Tab1 content</Tab>
        <Tab eventKey="tab2" title={'Tab2'}>Tab2 content</Tab>
        <Tab eventKey="tab3" title={'Tab3'}>Tab3 content</Tab>
        <Tab eventKey="tab4" title={'Tab4'}>Tab4 content</Tab> */}
        {tabItems}
      </Tabs>
    </div>
  )
}

export default TabsComponent
